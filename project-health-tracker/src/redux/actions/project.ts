import { Action } from "redux";
import { Project } from "../../common/model/project";

export const UPDATE_PROJECTS  = "[PROJECT] Update Projects";
export const PROCESS_UPDATED_PROJECT_COLUMNS = "[PROJECT] Process Only Updated Columns";

export interface UpdateProjectsAction  extends Action {
    type: string;
    payload: Project;
  }

  export type ClientActions = UpdateProjectsAction

export const updateProjects = (data: Project[]) => ({type: UPDATE_PROJECTS, payload: data });

export const processOnlyUpdatedColumn = (data: Project[]) => ({ type: PROCESS_UPDATED_PROJECT_COLUMNS, payload: data})