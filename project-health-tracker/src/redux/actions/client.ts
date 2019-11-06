import { Action } from "redux";
import { Client } from "../../common/model/client";

export const UPDATE_CLIENTS = "[CLIENT] Update Clients";
export const PROCESS_UPDATED_COLUMNS = "[CLIENT] Processing Only Updated Columns";
export const GET_CLIENTS = "[CLIENT] Get clients"
export const FETCH_CLIENTS_SUCCESS =  "[CLIENTS] Fetch success";
export const FETCH_CLIENTS_ERROR = "[CLIENTS] Fetch error";
// Action
export interface GetClientsAction extends Action {
  type: string 
}

export interface UpdateClientAction extends Action {
    type: string;
    payload: Client;
  }

export type ClientActions = UpdateClientAction

export const getAllClients  = (): GetClientsAction => ({ type: GET_CLIENTS });
export const updateClients = (data: Client[]) => ({type: UPDATE_CLIENTS, payload: data });

export const processOnlyUpdatedColumn = (data: Client[]) => ({ type: PROCESS_UPDATED_COLUMNS, payload: data})