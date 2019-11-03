import { UPDATE_CLIENTS, ClientActions } from "../actions/client";
import { merge } from "lodash";
import { EntityState } from "../states/genericState";
import { Client } from "../../common/model/client";

export default function clientReducer(
    state: EntityState<Client> = {},
    action: any) 
    {
      switch(action.type) {
        case UPDATE_CLIENTS:
          return merge({},state, action.payload);
        default:
          return state; 
      }    
}