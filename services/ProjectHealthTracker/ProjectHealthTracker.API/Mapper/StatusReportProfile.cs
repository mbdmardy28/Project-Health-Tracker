using AutoMapper;
using ProjectHealthTracker.API.Entities;
using ProjectHealthTracker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Mapper
{
    public class StatusReportProfile: Profile
    {
        public StatusReportProfile()
        {
            CreateMap<Project, ProjectDto>()   
                .ForMember(dest => dest.Id, src => src.MapFrom(s => s.Id))
                .ForMember(dest => dest.ProjectName, src => src.MapFrom(s => s.Name));

            {
                CreateMap<Project, GetProjectDto>()
                    .ForMember(dest => dest.Id, src => src.MapFrom(s => s.Id))
                    .ForMember(dest => dest.Name, src => src.MapFrom(s => s.Name))
                    .ForMember(dest => dest.Status, src => src.MapFrom(s => s.Status))
                    .ForMember(dest => dest.ClientId, src => src.MapFrom(s => s.ClientId));

                CreateMap<Client, ClientDto>()
               .ForMember(dest => dest.Id, src => src.MapFrom(s => s.Id))
               .ForMember(dest => dest.ClientName, src => src.MapFrom(s => s.Name));
             
            CreateMap<StatusReport, ProjectStatusDto>()
               .ForMember(dest => dest.Id, src => src.MapFrom(s => s.Id))
               .ForMember(dest => dest.WeekEnding, src => src.MapFrom(s => s.WeekEnding))
               .ForMember(dest => dest.User, src => src.MapFrom(s => s.User.Name))
               .ForMember(dest => dest.SubTeam, src => src.MapFrom(s => s.SubTeam))
               .ForMember(dest => dest.OverallStatus, src => src.MapFrom(s => s.OverallStatus))
               .ForMember(dest => dest.SubmittedDate, src => src.MapFrom(s => s.SubmittedDate))
              .ForMember(dest => dest.Project, src => src.MapFrom(s => s.Project))
              .ForMember(dest => dest.Client, src => src.MapFrom(s => s.Project.Client));
         
            // .ForMember(dest=> dest.Project, src => src.MapFrom(p=> Mapper.Map<StatusReport, ProjectDto>(p)));


            CreateMap<StatusReportDto, StatusReport>()
                .ForMember(dest => dest.ProjectId, src => src.MapFrom(s => s.ProjectId))
                .ForMember(dest => dest.WeekEnding, src => src.MapFrom(s => s.WeekEnding))
                .ForMember(dest => dest.OverallStatus, src => src.MapFrom(s => s.OverallStatus))
                .ForMember(dest => dest.BudgetStatus, src => src.MapFrom(s => s.BudgetStatus))
                .ForMember(dest => dest.ScheduleStatus, src => src.MapFrom(s => s.ScheduleStatus))
                .ForMember(dest => dest.ScopeStatus, src => src.MapFrom(s => s.ScopeStatus))
                .ForMember(dest => dest.DeliveryQualityStatus, src => src.MapFrom(s => s.DeliveryQualityStatus))
                .ForMember(dest => dest.ClientResourcesStatus, src => src.MapFrom(s => s.ClientResourcesStatus))
                .ForMember(dest => dest.ExecutiveSummary, src => src.MapFrom(s => s.ExecutiveSummary))
                .ForMember(dest => dest.Issues, src => src.MapFrom(s => s.Issues))
                .ForMember(dest => dest.Risks, src => src.MapFrom(s => s.Risks))
                .ForMember(dest => dest.Issues, src => src.MapFrom(s => s.Issues));



            CreateMap<StatusReport, StatusReportDetails>()
                .ForMember(dest => dest.ProjectId, src => src.MapFrom(s => s.ProjectId))
                .ForMember(dest => dest.WeekEnding, src => src.MapFrom(s => s.WeekEnding))
                .ForMember(dest => dest.OverallStatus, src => src.MapFrom(s => s.OverallStatus))
                .ForMember(dest => dest.BudgetStatus, src => src.MapFrom(s => s.BudgetStatus))
                .ForMember(dest => dest.ScheduleStatus, src => src.MapFrom(s => s.ScheduleStatus))
                .ForMember(dest => dest.ScopeStatus, src => src.MapFrom(s => s.ScopeStatus))
                .ForMember(dest => dest.DeliveryQualityStatus, src => src.MapFrom(s => s.DeliveryQualityStatus))
                .ForMember(dest => dest.ClientResourcesStatus, src => src.MapFrom(s => s.ClientResourcesStatus))
                .ForMember(dest => dest.ExecutiveSummary, src => src.MapFrom(s => s.ExecutiveSummary))
                .ForMember(dest => dest.Issues, src => src.MapFrom(s => s.Issues))
                .ForMember(dest => dest.Risks, src => src.MapFrom(s => s.Risks))
                .ForMember(dest => dest.Issues, src => src.MapFrom(s => s.Issues));




        }
    }
}
