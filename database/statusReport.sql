USE [projecthealthdb]
GO

/****** Object:  Table [dbo].[StatusReport]    Script Date: 11/5/2019 11:33:28 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StatusReport](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ProjectId] [int] NOT NULL,
	[SubTeam] [varchar](50) NULL,
	[WeekEnding] [date] NULL,
	[OverallStatus] [varchar](50) NULL,
	[BudgetStatus] [varchar](50) NULL,
	[ScheduleStatus] [varchar](50) NULL,
	[ScopeStatus] [varchar](50) NULL,
	[DeliveryQualityStatus] [varchar](50) NULL,
	[ClientResourcesStatus] [varchar](50) NULL,
	[ExecutiveSummary] [nvarchar](300) NULL,
	[Issues] [nvarchar](300) NULL,
	[Risks] [nvarchar](300) NULL,
	[SubmittedDate] [date] NULL,
	[SubmittedBy] [varchar](50) NULL,
	[UserId] [int] NULL,
 CONSTRAINT [PK_StatusReport] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[StatusReport]  WITH CHECK ADD  CONSTRAINT [FK_StatusReport_Project] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Project] ([Id])
GO

ALTER TABLE [dbo].[StatusReport] CHECK CONSTRAINT [FK_StatusReport_Project]
GO

ALTER TABLE [dbo].[StatusReport]  WITH CHECK ADD  CONSTRAINT [FK_StatusReport_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO

ALTER TABLE [dbo].[StatusReport] CHECK CONSTRAINT [FK_StatusReport_User]
GO


