using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Model
{
    public class NewStatusReportDto: StatusReportDto
    {
        public List<int> Tags { get; set; }
    }
}
