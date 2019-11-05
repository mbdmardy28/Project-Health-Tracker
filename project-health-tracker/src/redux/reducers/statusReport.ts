
import { UPDATE_REPORTS } from "../actions/statusReport";
import { merge } from "lodash";

import { EntityState } from "../states/genericState";
import { StatusReport } from "../../common/model/statusreport";

export default function statusReportReducer(state:EntityState<StatusReport> = {}, action: any)
    {
      switch(action.type) {
        case UPDATE_REPORTS:
          return merge({},state, action.payload);
      
        default:
          return state;
      }    
  }