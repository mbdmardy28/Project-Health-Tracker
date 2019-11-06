import { rootState } from "../states/genericState";
import { createSelector } from "reselect";
import { ProjectQuery } from "../../common/persistence/projectQuery";

const projects = (state:rootState) => state.entities.projects;

export const getProjectsSelector = createSelector(
         projects,(clients) => {
        let projectsQuery: ProjectQuery[] = [];
        for (const [key, value] of Object.entries(clients)) {
            const projectQuery: ProjectQuery  = {
                id: value.id,
                name: value.projectName
            }
            projectsQuery.push(projectQuery);
        }
        return projectsQuery;
    });
