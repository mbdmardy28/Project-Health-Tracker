using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Model
{
    public class ProjectStatusDto
    {
        public int Id { get; set; }
        public string OverallStatus { get; set; }
        public DateTime SubmittedDate { get; set; }
        public ClientDto Client { get; set; }
        public ProjectDto Project { get; set; }
    }
}
    