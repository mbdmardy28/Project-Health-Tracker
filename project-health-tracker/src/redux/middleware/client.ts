import { Middleware, MiddlewareAPI } from "redux";
import { PROCESS_UPDATED_COLUMNS, GET_CLIENTS, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_ERROR, updateClients } from "../actions/client";
import { apiRequest } from "../actions/api";
import { normalize } from "normalizr";
import { client } from "../actions/schema";
import { Client } from "../../common/model/client";

const URL = 'http://localhost:54253/api/client/all';

export const getClients: Middleware = ({dispatch }: MiddlewareAPI) => next => action => {
    next(action);
 
     if(action.type === GET_CLIENTS) {
        dispatch(apiRequest("GET", URL, null, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_ERROR))
     }
 }

 export const processClientsCollection: Middleware = ({dispatch}: MiddlewareAPI) => next => action => {
    next(action);
  
    if(action.type === FETCH_CLIENTS_SUCCESS) {
        console.log(action.payload);
      const normalizedData = normalize(action.payload, client);
      console.log("normalizedata",normalizedData.result);
      dispatch(updateClients(normalizedData.result as Client[]));
    }  
  }
  