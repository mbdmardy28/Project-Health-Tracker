import { Action } from "redux";

export const API_REQUEST = "[APP] Api Request";

// Actions
export interface ApiRequestAction  extends Action  {
    type: string,
    payload: any,
    meta: {
        method: string,
        url: string,
        onSuccess: string,
        onError: string
    } 
}
// Union Actions Types
export type Action = ApiRequestAction

// Action Creators
export const apiRequest = (method: string 
    , url: string 
    , body: any 
    , onSuccess: string
    , onError: string) : ApiRequestAction =>
    ({
        type: API_REQUEST,
        payload: body,
        meta: { method, url, onSuccess, onError}
    });
