import 'date-fns';
import * as React from "react";
import { 
        FormControl, 
        TextField, 
        Grid, 
        Container, 
        Button
       } from "@material-ui/core";
import {
        MuiPickersUtilsProvider,
        KeyboardDatePicker,
      } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ProjectTagList from "./project-tag-list";



const ProjectCreateStatus = () => {
    const tags: string[] = [];
    const projectNames = [
        { value: 'Taxation', label: 'Taxation'}, 
        { value: 'Realty', label: 'Realty'},
        { value: 'CRM', label: 'CRM'},
        { value: 'Backlog', label: 'Backlog'}
    ];
    const status = [
        { value: 'green', label: 'Good'}, 
        { value: 'yellow', label: 'Fair'},
        { value: 'red', label: 'Poor'}
    ];
    const [ProjectTags, setProjectTags] = React.useState(tags);
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );
    const [values, setValues] = React.useState({
        projectName: '',
        overallStatus: '',
        budget: '',
        schedule: '',
        scope: '',
        deliveryQuality: '',
        clientResources: ''
    });

    const handleChange = (name: string) => (event: { target: { value: any; }; }) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    
    return (
        <Container>
            <FormControl style={{width: '100%', padding: '30px 0px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField fullWidth 
                            select
                            label="Project Name"
                            value={values.projectName}
                            onChange={handleChange('projectName')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=" "> -- select -- </option>
                            {projectNames.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid  item xs={4} >
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker fullWidth
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="dense"
                                id="date-picker-inline"
                                label="Week Ending"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField fullWidth 
                            select
                            label="Overall Status"
                            value={values.overallStatus}
                            onChange={handleChange('overallStatus')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=" "> -- select -- </option>
                            {status.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField fullWidth
                            value=""
                            label="Executive Summary"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container justify="space-evenly">
                    <Grid item xs={2}>
                        <TextField fullWidth 
                            select
                            label="Budget"
                            value={values.budget}
                            onChange={handleChange('budget')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=" "> -- select -- </option>
                            {status.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth 
                            select
                            label="Schedule"
                            value={values.schedule}
                            onChange={handleChange('schedule')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=" "> -- select -- </option>
                            {status.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth 
                            select
                            label="Scope"
                            value={values.scope}
                            onChange={handleChange('scope')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=" "> -- select -- </option>
                            {status.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth 
                            select
                            label="Delivery & Quality"
                            value={values.deliveryQuality}
                            onChange={handleChange('deliveryQuality')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=" "> -- select -- </option>
                            {status.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth 
                            select
                            label="Client Resources"
                            value={values.clientResources}
                            onChange={handleChange('clientResources')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=" "> -- select -- </option>
                            {status.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField fullWidth
                            value=""
                            label="Issues"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField fullWidth
                            value=""
                            label="Risks"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
                <ProjectTagList projectTags={ProjectTags} setProjectTags={setProjectTags} />
                <Grid container spacing={2}>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={2}>
                        <Button fullWidth variant="contained" color="secondary" >
                            RESET
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button fullWidth variant="contained" color="primary" >
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Container>
    );
  }

  export default ProjectCreateStatus;