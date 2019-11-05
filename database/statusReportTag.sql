USE [projecthealthdb]
GO

/****** Object:  Table [dbo].[StatusReportTag]    Script Date: 11/5/2019 11:33:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[StatusReportTag](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[StatusReportId] [int] NOT NULL,
	[TagId] [int] NOT NULL,
 CONSTRAINT [PK_StatusReportTag] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[StatusReportTag]  WITH CHECK ADD  CONSTRAINT [FK_StatusReportTag_StatusReport] FOREIGN KEY([StatusReportId])
REFERENCES [dbo].[StatusReport] ([Id])
GO

ALTER TABLE [dbo].[StatusReportTag] CHECK CONSTRAINT [FK_StatusReportTag_StatusReport]
GO

ALTER TABLE [dbo].[StatusReportTag]  WITH CHECK ADD  CONSTRAINT [FK_StatusReportTag_Tag] FOREIGN KEY([TagId])
REFERENCES [dbo].[Tag] ([Id])
GO

ALTER TABLE [dbo].[StatusReportTag] CHECK CONSTRAINT [FK_StatusReportTag_Tag]
GO


