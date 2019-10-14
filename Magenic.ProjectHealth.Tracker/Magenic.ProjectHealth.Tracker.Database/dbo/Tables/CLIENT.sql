CREATE TABLE [dbo].[CLIENT] (
    [ID]        INT            IDENTITY (1, 1) NOT NULL,
    [NAME]      VARCHAR (1000) NULL,
    [REGION_ID] INT            NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([REGION_ID]) REFERENCES [dbo].[REGION] ([ID])
);

