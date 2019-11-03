import { SHOW_SPINNER, HIDE_SPINNER } from "../actions/ui";
import { uiState } from "../states/uiState";

const initialState:uiState = {
    pending: false,
    orderInProcess: false
};

export default function uiReducer(
    state=initialState,
    action: any) 
    {
      switch(action.type) {
        case SHOW_SPINNER:
          return { ...state, pending: true};
        case HIDE_SPINNER:
            return {...state, pending: false};
        default:
          return state;
      }    
  }