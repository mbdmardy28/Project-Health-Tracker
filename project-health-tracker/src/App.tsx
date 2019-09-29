import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ProjectList from "./components/project/project-list";
import MyProject from "./components/project/my-projects";
import ProjectDashboard from "./components/project/project-dashboard";

const App: React.SFC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <ProjectDashboard></ProjectDashboard>
            {/* <Route path="/MyProject" exact component={MyProject} />
            <Route path="/Dashboard" component={ProjectDashboard} /> */}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
