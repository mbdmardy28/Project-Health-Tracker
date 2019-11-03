using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectHealthTracker.API.Data;
using ProjectHealthTracker.API.Entities;
using ProjectHealthTracker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Controllers
{
    [Route("api/[controller]")]
    public class StatusReportController: Controller
    {
        private readonly ProjectHealthContext _context;
        private readonly IMapper _mapper;
        public StatusReportController(ProjectHealthContext context, IMapper mapper)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllStatusReports()
        {   
            var statusReports = await _context.StatusReports
                                .Include(p=>p.Project).ThenInclude(c=>c.Client)
                                .OrderByDescending(p => p.SubmittedDate)
                                .ToListAsync();

            var projectStatusReports = _mapper.Map<IEnumerable<ProjectStatusDto>>(statusReports);

            return Ok(projectStatusReports);
        }

        [HttpPost]
        public async Task<IActionResult> AddNewStatusReport([FromBody] NewStatusReportDto statusReportDto)
        {
            if (statusReportDto == null)
            {
                return BadRequest();
            }
            
            var statusReport = _mapper.Map<StatusReport>(statusReportDto);
            statusReport.SubmittedDate = DateTime.Now;
            _context.StatusReports.Add(statusReport);
            await  _context.SaveChangesAsync();

            statusReportDto.Tags.ForEach(id => _context.StatusReportTags.Add(
                new StatusReportTag { StatusReportId = statusReport.Id, TagId = id }
                ));
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("details")]
        public async Task<IActionResult> GetStatusReportDetails(int statusId)
        {
            var report = await _context.StatusReports
                                .Include(p => p.Project).ThenInclude(c => c.Client)
                                .Include(p=>p.StatusReportTags).ThenInclude(c=>c.Tag)
                                .Where(p => p.Id == statusId)
                                .FirstOrDefaultAsync();
            var tags = await _context.StatusReportTags.Where(p => p.StatusReportId == report.Id).ToListAsync();
            var statusReport = _mapper.Map<StatusReportDetails>(report);
            tags.ForEach(p => statusReport.Tags.Add(new TagDto { Id = p.TagId, Name = p.Tag.Name }));
            return Ok(statusReport);
        }

    }
}
