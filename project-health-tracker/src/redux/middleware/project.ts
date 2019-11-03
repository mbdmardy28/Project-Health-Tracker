import { Middleware, MiddlewareAPI } from "redux";
import { PROCESS_UPDATED_PROJECT_COLUMNS } from "../actions/project";


export const processUpdatedColumns: Middleware = ({dispatch }: MiddlewareAPI) => next => action => {
    next(action);
    if(action.type === PROCESS_UPDATED_PROJECT_COLUMNS) {
       
    }
 }