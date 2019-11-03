
import { createSelector } from "reselect";
import statusReportReducer from "../reducers/statusReport";
import { rootState } from "../states/genericState";
import { Client } from "../../common/model/client";
import { Project } from "../../common/model/project";

const projects = (state: rootState) => state.entities.clients;
const clients = (state:rootState) => state.entities.clients;
const statusReports = (state:rootState) => state.entities.statusReports;
export const getStatusReportSelector = createSelector(
    projects, clients, statusReports,(projects, clients, reports) => {
        let reportsQuery: StatusReportQuery[] = [];
        for (const [key, value] of Object.entries(reports)) {
            let report = {} as StatusReportQuery;
            report.id = value.id;
            report.overallStatus = value.overallStatus;
            report.client = clients[value.client];
            reportsQuery.push(report);
          }
        console.log("selector proj",projects);
        console.log("selector client",clients);
        console.log("selector reports",reports);
          return reportsQuery;

    
    });



    export interface StatusReportQuery {
        id:number
        submittedDate: string
        overallStatus:string
        weekEnding: Date
        client: Client
        project: Project
    }    