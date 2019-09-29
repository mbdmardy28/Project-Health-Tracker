import * as React from "react";
import { Grid, Box, Toolbar, Typography, Button } from "@material-ui/core";
import ProjectList from "./project-list";
import AddBoxIcon from "@material-ui/icons/AddBox";

const MyProject: React.FC = () => {
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
            <Button variant="contained" color="primary">
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
