import { Action } from "redux";
import { Project } from "../../common/model/project";

export const UPDATE_PROJECTS  = "[PROJECT] Update Projects";
export const PROCESS_UPDATED_PROJECT_COLUMNS = "[PROJECT] Process Only Updated Columns";
export const GET_PROJECTS = "[PROJECT] Get clients"
export const FETCH_PROJECTS_SUCCESS =  "[PROJECT] Fetch success";
export const FETCH_PROJECTS_ERROR = "[PROJECT] Fetch error";

//Actions

export interface GetProjectsAction extends Action {
  type: string 
}
export interface UpdateProjectsAction  extends Action {
    type: string;
    payload: Project;
  }

export type ProjectActions = UpdateProjectsAction | GetProjectsAction

export const updateProjects = (data: Project[]) => ({type: UPDATE_PROJECTS, payload: data });

export const processOnlyUpdatedColumn = (data: Project[]) => ({ type: PROCESS_UPDATED_PROJECT_COLUMNS, payload: data})

export const getAllProjects  = (): GetProjectsAction => ({ type: GET_PROJECTS });