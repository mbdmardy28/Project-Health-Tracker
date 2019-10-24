import { ProjectStatusDetail, Status, Suggestion } from "../common";


class ProjectService {

    private projectList: ProjectStatusDetail[] = [
        {
            client: "Ernest & Young",
            team: "Team Blue",
            location: "Chicago",
            weekEnding: new Date(),
            offshoreTeamLead: "Mark Laurence Coro",
            status: Status.POOR,
            projectName: 'Taxation',
            executiveSummary: 'The team is currently behind the schedule with over 24 story points stil lin-flight\n' +
                    'with only just 2 days left in the sprint. There are new requirements that are\n' +
                    'recently clarified with the client resulting to additional scope.',
            issues: 'Additional Requirements are added mid-sprint after clarifying some acceptance\n' +
                    'criteria items to 3 related user stories.',
            risks: 'As a result of new requirements being brought in to the sprint, there is a high risk\n' + 
                   'of not completing all our commitment for this sprint.',
            mitigation: 'Propose to create a separate user story to address new requirements.',
            owner: 'Team Lead, Business Analyst',
            tags: ['red', 'poor', 'at risk'],
            projectComponents: [
              { name: 'Budget', status: Status.GOOD },
              { name: 'Schedule', status: Status.POOR },
              { name: 'Scope', status: Status.POOR },
              { name: 'Delivery & Quality', status: Status.FAIR },
              { name: 'Client Resources', status: Status.GOOD },
            ]
        },
        {
            client: "Google",
            team: "Team Blue",
            location: "Chicago",
            weekEnding: new Date(),
            offshoreTeamLead: "Mark Laurence Coro",
            status: Status.FAIR,
            projectName: 'Realty',
            executiveSummary: 'The team is currently behind the schedule with over 24 story points stil lin-flight\n' +
                    'with only just 2 days left in the sprint. There are new requirements that are\n' +
                    'recently clarified with the client resulting to additional scope.',
            issues: 'Additional Requirements are added mid-sprint after clarifying some acceptance\n' +
                    'criteria items to 3 related user stories.',
            risks: 'As a result of new requirements being brought in to the sprint, there is a high risk\n' + 
                   'of not completing all our commitment for this sprint.',
            mitigation: 'Propose to create a separate user story to address new requirements.',
            owner: 'Team Lead, Business Analyst',
            tags: ['red', 'poor', 'at risk'],
            projectComponents: [
              { name: 'Budget', status: Status.FAIR },
              { name: 'Schedule', status: Status.GOOD },
              { name: 'Scope', status: Status.GOOD },
              { name: 'Delivery & Quality', status: Status.POOR },
              { name: 'Client Resources', status: Status.POOR },
            ]
        },
        {
            client: "BCG",
            team: "Team Red",
            location: "Minneapolis",
            weekEnding: new Date(),
            offshoreTeamLead: "Mardy Dacasin",
            status: Status.GOOD,
            projectName: 'CRM',
            executiveSummary: 'The team is currently behind the schedule with over 24 story points stil lin-flight\n' +
                    'with only just 2 days left in the sprint. There are new requirements that are\n' +
                    'recently clarified with the client resulting to additional scope.',
            issues: 'Additional Requirements are added mid-sprint after clarifying some acceptance\n' +
                    'criteria items to 3 related user stories.',
            risks: 'As a result of new requirements being brought in to the sprint, there is a high risk\n' + 
                   'of not completing all our commitment for this sprint.',
            mitigation: 'Propose to create a separate user story to address new requirements.',
            owner: 'Team Lead, Business Analyst',
            tags: ['good','green'],
            projectComponents: [
              { name: 'Budget', status: Status.POOR },
              { name: 'Schedule', status: Status.POOR },
              { name: 'Scope', status: Status.FAIR },
              { name: 'Delivery & Quality', status: Status.FAIR },
              { name: 'Client Resources', status: Status.FAIR },
            ]
        },
        {
            client: "Merchants Fleet",
            team: "Team Red",
            location: "Minneapolis",
            weekEnding: new Date(),
            offshoreTeamLead: "Mily Opena",
            status: Status.GOOD,
            projectName: 'Backlog',
            executiveSummary: 'The team is currently behind the schedule with over 24 story points stil lin-flight\n' +
                    'with only just 2 days left in the sprint. There are new requirements that are\n' +
                    'recently clarified with the client resulting to additional scope.',
            issues: 'Additional Requirements are added mid-sprint after clarifying some acceptance\n' +
                    'criteria items to 3 related user stories.',
            risks: 'As a result of new requirements being brought in to the sprint, there is a high risk\n' + 
                   'of not completing all our commitment for this sprint.',
            mitigation: 'Propose to create a separate user story to address new requirements.',
            owner: 'Team Lead, Business Analyst',
            tags: ['green', 'good'],
            projectComponents: [
              { name: 'Budget', status: Status.POOR },
              { name: 'Schedule', status: Status.POOR },
              { name: 'Scope', status: Status.FAIR },
              { name: 'Delivery & Quality', status: Status.FAIR },
              { name: 'Client Resources', status: Status.FAIR },
            ]
        }
    ];

    public getAllProjects = ():ProjectStatusDetail[] =>  {
        return this.projectList;
    }

    public getProjectDetailByName = (projectName: string):ProjectStatusDetail =>  {
        return this.projectList.filter(p => p.projectName === projectName)[0];
    }

    public getAllProjectTags = (): Suggestion[] => {
        return [
                  { label: 'poor' },
                  { label: 'good' },
                  { label: 'at risk' },
                  { label: 'green' },
                  { label: 'red' },
                  { label: 'yellow' }
              ];
    }


    
}

export default ProjectService;