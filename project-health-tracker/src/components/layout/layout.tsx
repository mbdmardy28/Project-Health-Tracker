import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./header";
import { Container } from "@material-ui/core";

const Layout: React.FC = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Header />
          <div className="App-Content">{props.children}</div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Layout;
