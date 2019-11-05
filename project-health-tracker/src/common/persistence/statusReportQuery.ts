import { Client } from "../model/client";
import { Project } from "../model/project";

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