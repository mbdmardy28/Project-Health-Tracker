import * as React from "react";
import {
  Grid,
  Box,
  Toolbar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import StatusReportsList from "./StatusReportsList";
import { useFetchStatusReport } from "./shared/statusReportHooks";

const ManagerContainer: React.FC = () => {
  const statusReportsData = useFetchStatusReport();
  return (
    <Box component="span">
      <Grid container justify="space-between">
        <Grid item xs={12}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Project Dashboard
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item xs={10} style={{ textAlign: "center" }}>
          <p>DRAG AND DROP TAGS</p>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="date"
            label="Weekend Status"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <br></br>
        <br></br>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <StatusReportsList reports={statusReportsData}></StatusReportsList>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ManagerContainer;
