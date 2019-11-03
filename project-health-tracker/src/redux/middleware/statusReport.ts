import { Middleware, MiddlewareAPI } from "redux";
import { normalize } from 'normalizr';

import {  GET_REPORT, FETCH_REPORT_SUCCESS, updateStatusReports, FETCH_REPORT_ERROR } from "../actions/statusReport";
import { hideSpinner, showSpinner } from "../actions/ui";
import { statusReportList } from '../actions/schema';
import { updateClients } from "../actions/client";
import { updateProjects } from "../actions/project";
import { apiRequest } from "../actions/api";

import { Client } from "../../common/model/client";
import { Project } from "../../common/model/project";
import { StatusReport } from "../../common/model/statusreport";

const URL = 'http://localhost:54253/api/StatusReport/all';

export const getStatusReport: Middleware = ({dispatch }: MiddlewareAPI) => next => action => {
   next(action);

    if(action.type === GET_REPORT) {
      dispatch(apiRequest("GET", URL, null, FETCH_REPORT_SUCCESS, FETCH_REPORT_ERROR))
      dispatch(showSpinner());
    }
}

export const processReportsCollection: Middleware = ({dispatch}: MiddlewareAPI) => next => action => {
  next(action);

  if(action.type === FETCH_REPORT_SUCCESS) {
    console.log(action.payload);
    console.log("Normalize");
    const normalizedData = normalize(action.payload, statusReportList);
    console.log(normalizedData);
    dispatch(updateClients(normalizedData.entities.clients as Client[]));
    dispatch(updateProjects(normalizedData.entities.projects as Project[]))
    dispatch(updateStatusReports(normalizedData.entities.statusReports as StatusReport[]));
    dispatch(hideSpinner()) 
  }  
}


export const statusReportMiddleware = [getStatusReport, processReportsCollection];