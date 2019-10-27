using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Model
{
    public class StatusReportDetails: StatusReportDto
    {
        public StatusReportDetails()
        {
            Tags = new List<TagDto>();
        }
        public List<TagDto> Tags { get; set; }
    }


}
