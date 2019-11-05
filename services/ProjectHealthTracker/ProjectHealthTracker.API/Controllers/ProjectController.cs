using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectHealthTracker.API.Data;
using ProjectHealthTracker.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Controllers
{
    [Route("api/[controller]")]
    public class ProjectController: Controller
    {
        private readonly ProjectHealthContext _context;
        private readonly IMapper _mapper;
        public ProjectController(ProjectHealthContext context, IMapper mapper)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
        }
        [HttpGet("all")]
        public async Task<IActionResult> GetAllStatusReports()
        {
            var statusReports = await _context.Projects.ToListAsync();
                               
            var projectStatusReports = _mapper.Map<IEnumerable<GetProjectDto>>(statusReports);

            return Ok(projectStatusReports);
        }

    }
}
