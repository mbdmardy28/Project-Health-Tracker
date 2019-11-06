import * as React from "react";
import { Grid, Box, Toolbar, Typography, Button } from "@material-ui/core";
import ProjectList from "./StatusReportsList";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useFetchStatusReport } from "./shared/statusReportHooks";
import StatusReportsList from "./StatusReportsList";
import { NavLink } from "react-router-dom";


const UserContainer: React.FC = () => {

  const reportData =  useFetchStatusReport();

  const handleChangeDate = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box component="span">
      <Grid container justify="space-between">
        <Grid item xs={10}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              My Projects
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={2}>
          <Toolbar>
            <Button variant="contained" color="primary" onClick={handleChangeDate}>
              <NavLink to="/create-status-report" >
                <AddBoxIcon /> New Status Report
              </NavLink> 
            </Button>
          </Toolbar>
        </Grid>
        <br></br> 
        <Grid item xs={12}>   
           <StatusReportsList reports={reportData}></StatusReportsList>
        </Grid>
      </Grid>
    </Box>
  );
};
export default UserContainer;

