import { StatusReport } from "../../model/statusreport";
import { Action } from "redux";

export const ReportEventTypes = {
    REPORT_FETCH: "REPORT_FETCH",
    REPORT_FETCH_SUCCESS:"REPORT_FETCH_SUCCESS",
    REPORT_FETCH_FAILED: "REPORT_FETCH_FAILED"
};

export interface FetchReport extends Action {
    type: string,
    payload: StatusReport[]
}

export interface AddStatusReport extends Action {
    type: string;
    payload: StatusReport;
  }
  
export type ReportActions = FetchReport | AddStatusReport