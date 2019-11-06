import { Middleware, MiddlewareAPI } from "redux";
import { GET_PROJECTS, FETCH_PROJECTS_SUCCESS, updateProjects } from "../actions/project";
import { apiRequest } from "../actions/api";
import { FETCH_REPORT_ERROR } from "../actions/statusReport";
import { normalize } from "normalizr";
import { project } from "../actions/schema";
import { Project } from "../../common/model/project";

const URL = 'http://localhost:54253/api/project/all';

export const getProjects: Middleware = ({dispatch }: MiddlewareAPI) => next => action => {
    next(action);
 
     if(action.type === GET_PROJECTS) {
        dispatch(apiRequest("GET", URL, null, FETCH_PROJECTS_SUCCESS, FETCH_REPORT_ERROR))
     }
 }

 export const processProjectsCollection: Middleware = ({dispatch}: MiddlewareAPI) => next => action => {
    next(action);
  
    if(action.type === FETCH_PROJECTS_SUCCESS) {
      const normalizedData = normalize(action.payload, project);
      console.log("normalizedata",normalizedData.result);
      dispatch(updateProjects(normalizedData.result as Project[]));
    }  
  }
  