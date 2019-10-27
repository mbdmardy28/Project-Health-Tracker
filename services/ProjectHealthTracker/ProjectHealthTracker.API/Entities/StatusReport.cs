using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Entities
{
    public class StatusReport
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int ProjectId { get; set; }

        [MaxLength(50)]
        public string SubTeam { get; set; }

        public DateTime WeekEnding { get; set; }

        [MaxLength(50)]
        public string OverallStatus { get; set; }

        [MaxLength(50)]
        public string BudgetStatus { get; set; }

        [MaxLength(50)]
        public string ScheduleStatus { get; set; }

        [MaxLength(50)]
        public string ScopeStatus { get; set; }

        [MaxLength(50)]
        public string DeliveryQualityStatus { get; set; }

        [MaxLength(50)]
        public string ClientResourcesStatus { get; set; }

        [MaxLength(300)]
        public string ExecutiveSummary { get; set; }

        [MaxLength(300)]
        public string Issues { get; set; }

        [MaxLength(300)]
        public string Risks { get; set; }

        public DateTime? SubmittedDate { get; set; }
        public string SubmittedBy { get; set; }

        public Project Project { get; set; }
        public List<StatusReportTag> StatusReportTags { get; set; }
    }
}
