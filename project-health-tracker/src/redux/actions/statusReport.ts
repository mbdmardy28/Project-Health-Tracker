import { StatusReport } from "../../common/model/statusreport";
import { Action, ActionCreator } from "redux";

export const GET_REPORT = "[STATUSREPORT] Get Status Reports";
export const FETCH_REPORT_SUCCESS =  "[STATUSREPORT] Fetch success";
export const FETCH_REPORT_ERROR = "[STATUSREPORT] Fetch error";
export const UPDATE_REPORTS = "[STATUSREPORT] Update reports";
export const ADD_STATUS_REPORT = "[STATUSREPORT] Add new status report";
export const ADD_STATUS_REPORT_SUCCESS = "[STATUSREPORT] Added new status report";
export const ADD_STATUS_REPORT_FAIL = "[STATUSREPORT] Fail to add status report";

// Action
export interface GetStatusReportAction extends Action {
    type: string 
}

export interface AddStatusReportAction extends Action {
    type: string;
    payload: StatusReport;
  }
  
// Action Types
export type ReportAction = GetStatusReportAction | AddStatusReportAction

// Action Creators
export const getStatusReport  = (): GetStatusReportAction => ({ type: GET_REPORT });

export const updateStatusReports = (data: StatusReport[]) => ({type: UPDATE_REPORTS, payload: data });

export const addStatusReport = (data: StatusReport) => ({type: ADD_STATUS_REPORT, payload: data });
