﻿CREATE TABLE [dbo].[STATUS_REPORT] (
    [ID]                         INT            IDENTITY (1, 1) NOT NULL,
    [PROJECT_ID]                 INT            NULL,
    [SUB_TEAM]                   VARCHAR (1000) NULL,
    [WEEK_ENDING_DATE]           DATE           NULL,
    [OVERALL_STATUS_ID]          INT            NULL,
    [BUDGET_STATUS_ID]           INT            NULL,
    [SCHEDULE_STATUS_ID]         INT            NULL,
    [SCOPE_STATUS_ID]            INT            NULL,
    [DELIVERY_QUALITY_STATUS_ID] INT            NULL,
    [CLIENT_RESOURCES_STATUS_ID] INT            NULL,
    [EXECUTIVE_SUMMARY]          VARCHAR (MAX)  NULL,
    [ISSUES]                     VARCHAR (MAX)  NULL,
    [RISKS]                      VARCHAR (MAX)  NULL,
    [SUBMITTED_DATE]             DATETIME       NULL,
    [SUBMITTED_BY]               VARCHAR (1000) NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([CLIENT_RESOURCES_STATUS_ID]) REFERENCES [dbo].[Project] ([ID]),
    FOREIGN KEY ([DELIVERY_QUALITY_STATUS_ID]) REFERENCES [dbo].[Project] ([ID]),
    FOREIGN KEY ([OVERALL_STATUS_ID]) REFERENCES [dbo].[Project] ([ID]),
    FOREIGN KEY ([PROJECT_ID]) REFERENCES [dbo].[Project] ([ID]),
    FOREIGN KEY ([SCHEDULE_STATUS_ID]) REFERENCES [dbo].[Project] ([ID]),
    FOREIGN KEY ([SCOPE_STATUS_ID]) REFERENCES [dbo].[Project] ([ID])
);

