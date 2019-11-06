import { API_REQUEST } from "../actions/api"
import { Middleware, MiddlewareAPI } from "redux";

export const api: Middleware = ({dispatch, getState }: MiddlewareAPI) => 
next => action => {

    console.log(action.type);
    if(action.type === API_REQUEST) {
        const { method, url, onSuccess, onError} = action.meta;
      if(method === "GET") {    
        fetch(url, {method})
            .then((response => response.json()))
            .then((data) => dispatch({type: onSuccess, payload: data}))
            .catch(error => dispatch({type: onError, payload: error}))
      }else {
        fetch(url, 
            {method,
             headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
             },
             body: JSON.stringify(action.payload)})
            .then((response => response.json()))
            .then((data) => dispatch({type: onSuccess, payload: data}))
            .catch(error => dispatch({type: onError, payload: error}))
      }

    }

    const value = next(action);

    console.log('state after dispatch', getState());

    return value;

}