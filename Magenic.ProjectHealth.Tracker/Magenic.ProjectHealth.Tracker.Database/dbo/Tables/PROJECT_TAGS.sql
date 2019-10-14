CREATE TABLE [dbo].[PROJECT_TAGS] (
    [ID]         INT            IDENTITY (1, 1) NOT NULL,
    [PROJECT_ID] INT            NULL,
    [TAG]        VARCHAR (100)  NULL,
    [ADDED_BY]   VARCHAR (1000) NULL,
    [ADDED_DATE] DATETIME       DEFAULT (getdate()) NULL
);

