﻿CREATE TABLE [dbo].[PROJECT] (
    [ID]        INT            IDENTITY (1, 1) NOT NULL,
    [NAME]      VARCHAR (1000) NULL,
    [CLIENT_ID] INT            NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([CLIENT_ID]) REFERENCES [dbo].[CLIENT] ([ID])
);

