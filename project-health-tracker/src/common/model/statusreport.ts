export interface StatusReport {
    id:number
    submittedDate: string
    overallStatus:string
    weekEnding: Date
    client: number
    project: number
    user: string,
    subTeam: string,
    budgetStatus: string,
    scheduleStatus: string,
    scopeStatus: string,
    deliveryQualityStatus: string,
    clientResourcesStatus: string,
    executiveSummary: string,
    issues: string,
    risks: string
}