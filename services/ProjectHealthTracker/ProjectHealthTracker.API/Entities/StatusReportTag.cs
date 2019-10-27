using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Entities
{
    public class StatusReportTag
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int StatusReportId { get; set; }
        public int TagId { get; set; }

        public Tag Tag { get; set; }
        public StatusReport StatusReport { get; set; }
    }
}
