import { Project } from "./project";
import { Client } from "./client";
import { User } from "./user";

export interface StatusReport {
    id:number
    project: Project
    client: Client,
    submittedDate: string
    user: User,
    weekending: string
}