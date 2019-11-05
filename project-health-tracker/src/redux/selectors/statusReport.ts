
import { createSelector } from "reselect";
import { rootState, EntityState } from "../states/genericState";
import { StatusReport } from "../../common/model/statusreport";
import { Client } from "../../common/model/client";
import { Project } from "../../common/model/project";
import { StatusReportQuery } from "../../common/persistence/statusReportQuery";

const projects = (state: rootState) => state.entities.projects;
const clients = (state:rootState) => state.entities.clients;
const statusReports = (state:rootState) => state.entities.statusReports;

export const getStatusReportSelector = createSelector(
    projects, clients, statusReports,(projects, clients, reports) => {
        let reportsQuery: StatusReportQuery[] = [];
        for (const [key, value] of Object.entries(reports)) {
            const report = statusReportMapper(value, clients, projects);
            reportsQuery.push(report,);
        }
        return reportsQuery;
    });

const statusReportMapper  = (statusReport: StatusReport
  , clients: EntityState<Client>
  , projects: EntityState<Project>): StatusReportQuery => {

      const { id, overallStatus, submittedDate, client, project } = statusReport;
      let report = {} as StatusReportQuery;
      let clientQuery = {} as Client;
      let projectQuery = {} as Project;
      report.id = id;
      report.overallStatus = overallStatus;
      report.submittedDate = submittedDate;
      report.user = statusReport.user;
      report.subTeam = statusReport.subTeam;
      report.weekEnding = statusReport.weekEnding;
      clientQuery.id = clients[client].id;
      clientQuery.clientName = clients[client].clientName;
      report.client = clientQuery;

      projectQuery.id = projects[project].id;
      projectQuery.projectName = projects[project].projectName;
      report.project = projectQuery;
     return report;
}

   