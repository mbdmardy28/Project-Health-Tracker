import { Middleware, MiddlewareAPI } from "redux";
import { normalize } from 'normalizr';

import {  GET_REPORT, FETCH_REPORT_SUCCESS, updateStatusReports, FETCH_REPORT_ERROR, ADD_STATUS_REPORT, ADD_STATUS_REPORT_SUCCESS, ADD_STATUS_REPORT_FAIL } from "../actions/statusReport";
import { statusReportList } from '../actions/schema';
import { updateClients } from "../actions/client";
import { updateProjects } from "../actions/project";
import { apiRequest } from "../actions/api";

import { Client } from "../../common/model/client";
import { Project } from "../../common/model/project";
import { StatusReport } from "../../common/model/statusreport";

const getAllURL = 'http://localhost:54253/api/StatusReport/all';
const postStatusURL = 'http://localhost:54253/api/StatusReport';
export const getStatusReport: Middleware = ({dispatch }: MiddlewareAPI) => next => action => {
   next(action);

    if(action.type === GET_REPORT) {
      dispatch(apiRequest("GET", getAllURL, null, FETCH_REPORT_SUCCESS, FETCH_REPORT_ERROR))
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
  }  
}

export const addStatusReport: Middleware = ({dispatch}: MiddlewareAPI) => next => action => {
  next(action);
  if(action.type === ADD_STATUS_REPORT) {
    console.log("payload",action.payload);
    dispatch(apiRequest("POST", postStatusURL, action.payload, ADD_STATUS_REPORT_SUCCESS, ADD_STATUS_REPORT_FAIL))
  }
}


export const statusReportMiddleware = [getStatusReport, processReportsCollection, addStatusReport]; 