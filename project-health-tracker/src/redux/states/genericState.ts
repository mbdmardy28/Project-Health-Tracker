import { Client } from "../../common/model/client";
import { Project } from "../../common/model/project";
import { StatusReport } from "../../common/model/statusreport";
import { uiState } from "./uiState";

// use to create stronly type domain state for normalize redux state
export interface EntityState<T> {
    [id: string]: T
}

export interface rootState {
    entities: {
        clients: EntityState<Client>,
        projects: EntityState<Project>,
        statusReports: EntityState<StatusReport>
    }
    ui: uiState
}
