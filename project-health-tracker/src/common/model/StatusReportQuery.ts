import { Client } from "../../common/model/client";
import { Project } from "../../common/model/project";

export interface StatusReportQuery {
    id:number
    submittedDate: string
    overallStatus:string
    weekEnding: Date
    client: Client
    project: Project
    user: string,
    subTeam: string
}    