
export type ProjectComponent = {
    name: string;
    status: Status;
}

export enum Status {
    GOOD = 'green',
    FAIR = 'yellow',
    POOR = 'red'
}

export type ProjectStatusDetail = {
    client: string,
    team: string,
    location: string,
    weekEnding: Date,
    offshoreTeamLead: string,
    status: string;
    projectName: string;
    executiveSummary: string;
    issues: string;
    risks: string;
    mitigation: string;
    owner: string;
    tags: string [];
    projectComponents: ProjectComponent [];
}

export interface Suggestion {
    label: string;
}
