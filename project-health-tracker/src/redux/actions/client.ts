import { Action } from "redux";
import { Client } from "../../common/model/client";

export const UPDATE_CLIENTS = "[CLIENT] Update Clients";
export const PROCESS_UPDATED_COLUMNS = "[CLIENT] Processing Only Updated Columns";

export interface UpdateClientAction extends Action {
    type: string;
    payload: Client;
  }

  export type ClientActions = UpdateClientAction

export const updateClients = (data: Client[]) => ({type: UPDATE_CLIENTS, payload: data });

export const processOnlyUpdatedColumn = (data: Client[]) => ({ type: PROCESS_UPDATED_COLUMNS, payload: data})