using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectHealthTracker.API.Model
{
    public class GetProjectDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public int ClientId { get; set; }
    }
}
