export interface StatusReport {
    id:number
    submittedDate: string
    overallStatus:string
    weekEnding: Date
    client: number
    project: number
    user: string,
    subTeam: string
}