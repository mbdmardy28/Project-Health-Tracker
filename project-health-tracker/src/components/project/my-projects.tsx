import * as React from "react";
import { Grid, Box, Toolbar, Typography, Button } from "@material-ui/core";
import ProjectList from "./project-list";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStatusReport } from "../../redux/actions/statusReport";
import { getStatusReportSelector } from "../../redux/selectors/statusReport";

const MyProject: React.FC = () => {
  const dispatch = useDispatch();
useEffect(()=>{
  alert("hello");
  dispatch(getStatusReport());
},[dispatch]) 

const reportData = useReportData();
const handleChangeDate = (e: React.FormEvent) => {
  e.preventDefault();

  console.log("selectedData",reportData);
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
          <ProjectList></ProjectList>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MyProject;

const useReportData = () => useSelector(getStatusReportSelector); 
