export interface NewStatusReport {
    overallStatus:string
    weekEnding: Date
    projectId: number
    budgetStatus: string,
    scheduleStatus: string,
    scopeStatus: string,
    deliveryQualityStatus: string,
    clientResourcesStatus: string,
    executiveSummary: string,
    issues: string,
    risks: string
    tags: string[]
}