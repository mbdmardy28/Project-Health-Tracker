import { combineReducers } from "redux";
import clientReducer from "./client";
import projectReducer from "./project";
import statusReportReducer from "./statusReport";
import uiReducer from "./ui";
import { rootState } from "../states/genericState";

export default combineReducers<rootState>({
   entities: combineReducers( {
      clients: clientReducer,
      projects: projectReducer,
      statusReports: statusReportReducer
   }),
   ui: uiReducer
});