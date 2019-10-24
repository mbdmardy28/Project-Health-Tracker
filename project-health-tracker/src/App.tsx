import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ProjectList from "./components/project/project-list";
import MyProject from "./components/project/my-projects";
import ProjectDashboard from "./components/project/project-dashboard";
import ProjectService from "./services/project-service";
import { ProjectStatusDetail } from "./common";
import ProjectStatusDetails from "./components/project/project-status-details";
import IntegrationDownshift from "./components/project/project-tag-input";
import ProjectCreateStatus from "./components/project/project-create-status";

const App: React.SFC = () => {
  const _projectService = new ProjectService();
  const projectDetail: ProjectStatusDetail = _projectService.getProjectDetailByName('CRM');
  
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={ProjectDashboard} />
            <Route path="/MyProject" exact component={MyProject} />
            <Route path="/project-status-details" render={() => <ProjectStatusDetails {...projectDetail} />} />
            <Route path="/create-project-status" component={ProjectCreateStatus} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
