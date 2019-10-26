import Redux from "redux";
import { ApiType } from "../../services";
import { ReportEventTypes } from "./reportActionTypes";


export const fetchReports = () => {
    return (
      dispatch: Redux.Dispatch,
      api: ApiType
    ) => {
      return api.report.get().then(data => {
        dispatch({
          type: ReportEventTypes.REPORT_FETCH,
          payload: data || []
        });
      });
    };
  };
  
