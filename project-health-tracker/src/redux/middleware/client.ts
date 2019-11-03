import { Middleware, MiddlewareAPI } from "redux";
import { PROCESS_UPDATED_COLUMNS } from "../actions/client";

export const processUpdatedColumns: Middleware = ({dispatch }: MiddlewareAPI) => next => action => {
    next(action);
 
     if(action.type === PROCESS_UPDATED_COLUMNS) {
       
     }
 }