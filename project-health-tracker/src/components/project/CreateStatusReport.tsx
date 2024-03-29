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
import ProjectTagList from "./ProjectTagList";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStatusReport } from '../../redux/actions/statusReport';
import { NewStatusReport } from '../../common/persistence/newStatusReport';
import { getClientsSelector } from '../../redux/selectors/clients';
import { ClientQuery } from '../../common/persistence/clientQuery';
import { getProjectsSelector } from '../../redux/selectors/project';
import { NavLink, useLocation } from 'react-router-dom';


const CreateStatusReport = () => {
    const tags: string[] = [];
 
    const [ProjectTags, setProjectTags] = useState(tags);
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );
    const [values, setValues] = useState({
        projectId: 0,
        overallStatus: '',
        budget: '',
        schedule: '',
        scope: '',
        deliveryQuality: '',
        clientResources: '',
        executiveSummary: '',
        issues:'',
        risks: ''
    });

    const handleChange = (name: string) => (event: { target: { value: any; }; }) => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    const initialCLients: ClientQuery[] = [];
    const selectProject = useSelector(getProjectsSelector);
    const [projects, setProjects] = useState(initialCLients);
    useEffect(() => {
        setProjects(selectProject);
    })
    
    const dispatch = useDispatch();
    const location = useLocation();
    const saveReport = () => {
        const report: NewStatusReport =  {
           projectId: 1,
           overallStatus: values.overallStatus,
           weekEnding: new Date(),//selectedDate as Date,
           budgetStatus: values.budget,
           scheduleStatus: values.schedule,
           scopeStatus: values.scope,
           deliveryQualityStatus: values.deliveryQuality,
           clientResourcesStatus: values.clientResources,
           executiveSummary: values.executiveSummary,
           issues: values.issues,
           risks: values.risks
       };
      dispatch(addStatusReport(report));
    };

    return (
        <Container>
            <FormControl style={{width: '100%', padding: '30px 0px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField fullWidth 
                            select
                            label=""
                            value={values.projectId}    
                            onChange={handleChange('projectId')}
                            SelectProps={{
                            native: true,
                            }}
                            margin="dense"
                            variant="outlined"
                        >
                            <option value=""> -- select -- </option>
                            {projects.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
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
                            label="Executive Summary"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('executiveSummary')}
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
                            label="Issues"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('issues')}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TextField fullWidth
                            label="Risks"
                            multiline
                            rows="4"
                            margin="normal"
                            variant="outlined"
                            onChange={handleChange('risks')}
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
                        <Button fullWidth variant="contained" color="primary"  onClick={saveReport}>
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Container>
    );
  }
export default CreateStatusReport;

const projectNames = [
    { value: 'Taxation', label: 'Taxation'}, 
    { value: 'Realty', label: 'Realty'},
    { value: 'CRM', label: 'CRM'},
    { value: 'Backlog', label: 'Backlog'}
];
const status = [
    { value: 'Good', label: 'Good'}, 
    { value: 'Fair', label: 'Fair'},
    { value: 'Poor', label: 'Poor'}
];

