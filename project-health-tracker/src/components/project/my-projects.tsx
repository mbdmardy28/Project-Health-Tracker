import * as React from "react";
import { Grid, Box, Toolbar, Typography, Button } from "@material-ui/core";
import ProjectList from "./project-list";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getStatusReport } from "../../redux/actions/statusReport";
import { getStatusReportSelector } from "../../redux/selectors/statusReport";
import { StatusReportQuery } from "../../common/model/StatusReportQuery";
const MyProject: React.FC = () => {

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
              <AddBoxIcon />
              New Status Report
            </Button>
          </Toolbar>
        </Grid>
        <br></br>
        <Grid item xs={12}>   
           <ProjectList reports={reportData}></ProjectList>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MyProject;

const useStatusReportsData = () => useSelector(getStatusReportSelector); 

const useFetchStatusReport = (): StatusReportQuery[] => {
  const dispatch = useDispatch();
  const reportData = useStatusReportsData();

  useEffect(()=>{
    dispatch(getStatusReport());
  },[dispatch]) 

  console.log(reportData);
  return reportData;

};

const initialStatusReports = (): StatusReportQuery[] =>[];