import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import ProjectList from "./components/project/StatusReportsList";
import MyProject from "./components/project/UserContainer";
import ProjectDashboard from "./components/project/ManagerContainer";
import ProjectService from "./services/project-service";
import { ProjectStatusDetail } from "./common";
import ProjectStatusDetails from "./components/project/project-status-details";
import IntegrationDownshift from "./components/project/project-tag-input";
import ProjectCreateStatus from "./components/project/CreateStatusReport";
import UserContainer from "./components/project/UserContainer";
import ManagerContainer from "./components/project/ManagerContainer";
import CreateStatusReport from "./components/project/CreateStatusReport";

const App: React.SFC = () => {
  const _projectService = new ProjectService();
  const projectDetail: ProjectStatusDetail = _projectService.getProjectDetailByName('CRM');
  
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={UserContainer} />
            <Route path="/lead-dashboard" exact component={UserContainer} />
            <Route path="/cm-dashboard" exact component={ManagerContainer} />
            <Route path="/project-status-details" render={() => <ProjectStatusDetails {...projectDetail} />} />
            <Route path="/create-status-report" component={CreateStatusReport} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
