USE [projecthealthdb]
GO

ALTER TABLE [dbo].[Client] DROP CONSTRAINT [FK_Client_Region]
GO

/****** Object:  Table [dbo].[Client]    Script Date: 11/5/2019 11:30:52 PM ******/
DROP TABLE [dbo].[Client]
GO

/****** Object:  Table [dbo].[Client]    Script Date: 11/5/2019 11:30:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
Q
CREATE TABLE [dbo].[Client](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NOT NULL,
	[RegionId] [int] NOT NULL,
 CONSTRAINT [PK_Client] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Client]  WITH CHECK ADD  CONSTRAINT [FK_Client_Region] FOREIGN KEY([RegionId])
REFERENCES [dbo].[Region] ([Id])
GO

ALTER TABLE [dbo].[Client] CHECK CONSTRAINT [FK_Client_Region]
GO


