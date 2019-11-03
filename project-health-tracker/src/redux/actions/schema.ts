import { schema } from 'normalizr';

export const project= new schema.Entity('projects',);

export const client = new schema.Entity('clients');

export const statusReport = new schema.Entity('statusReports', {
    client: client,
    project: project
});

export const statusReportList = new schema.Array(statusReport);
export const statusReportResponse = { statusReports: new schema.Array(statusReport)}