import React from 'react';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import ProjectService from '../../services/project-service';
import { Suggestion } from '../../common';

const _projectService = new ProjectService();

const suggestions: Suggestion[] = _projectService.getAllProjectTags();

type RenderInputProps = TextFieldProps & {
  classes: ReturnType<typeof useStyles>;
  ref?: React.Ref<HTMLDivElement>;
};


function renderInput(inputProps: RenderInputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

interface RenderSuggestionProps {
  highlightedIndex: number | null;
  index: number;
  itemProps: MenuItemProps<'div', { button?: never }>;
  selectedItem: Suggestion['label'];
  suggestion: Suggestion;
}

function renderSuggestion(suggestionProps: RenderSuggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

function getSuggestions(value: string, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 0,
    },
    container: {
      flexGrow: 1,
      position: 'relative',
      width: '200px',
      marginTop: '10px',
      display: 'inline-block'
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
    },
    chip: {
      margin: theme.spacing(0.5, 0.25),
    },
    inputRoot: {
      flexWrap: 'wrap',
    },
    inputInput: {
      width: 'auto',
      flexGrow: 1,
    },
    divider: {
      height: theme.spacing(2),
    },
  }),
);


const IntegrationDownshift = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Downshift id="downshift-options">
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          openMenu,
          selectedItem,
        }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                if (event.target.value === '') {
                  clearSelection();
                }
            },
            onKeyPress: (e: any) => {
    
                if (e.key === 'Enter') {
                    let val = e.target.value;
                    
                    if(val && val !== null && val.trim() !== '' 
                      && props.projectTags.indexOf(val.trim()) < 0
                      && suggestions.filter(s => s.label === val.trim()).length > 0){
                        props.setProjectTags([...props.projectTags, val.trim()]);
                    }
                    clearSelection();
                }
          
            }, 
            onFocus: openMenu,
            placeholder: 'Add Tag',
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputLabelProps: getLabelProps({ shrink: true } as any),
                InputProps: { onBlur, onChange, onFocus },
                inputProps,
              })}
              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue!, { showEmpty: true }).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
}

export default IntegrationDownshift;