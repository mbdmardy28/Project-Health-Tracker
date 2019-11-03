
import { UPDATE_PROJECTS } from "../actions/project";
import { merge } from "lodash";
import { Project } from "../../common/model/project";
import { EntityState } from "../states/genericState";

export default function projectReducer(state:EntityState<Project> = {} , action: any) 
    {
      switch(action.type) {
        case UPDATE_PROJECTS:
          return merge({},state, action.payload);
        default:
          return state;
      }    
}