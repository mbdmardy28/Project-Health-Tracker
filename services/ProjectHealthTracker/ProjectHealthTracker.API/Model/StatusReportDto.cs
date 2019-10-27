using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Model
{
    public class StatusReportDto
    {
        public int ProjectId { get; set; }
        public DateTime WeekEnding { get; set; }
        public string OverallStatus { get; set; }
        public string BudgetStatus { get; set; }
        public string ScheduleStatus { get; set; }
        public string ScopeStatus { get; set; }
        public string DeliveryQualityStatus { get; set; }
        public string ClientResourcesStatus { get; set; }
        public string ExecutiveSummary { get; set; }
        public string Issues { get; set; }
        public string Risks { get; set; }
      
    }
}
