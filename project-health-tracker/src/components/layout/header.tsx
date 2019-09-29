import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Header: React.FC = () => {
  return (
    <div>
      <AppBar className="App-header" position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            PROJECT HEALTH TRACKER
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
