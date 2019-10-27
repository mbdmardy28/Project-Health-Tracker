using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Model
{
    public class ProjectStatusDto
    {
        public int ClientId { get; set; }
        public string ClientName { get; set; }
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public string OverallStatus { get; set; }
        public DateTime SubmittedDate { get; set; }
    }
}
