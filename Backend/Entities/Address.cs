using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Entities
{
    public class Address
    {
        public string ID { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Street { get; set; }
        public string PhotoID { get; set; }
        public virtual Photo Photo { get; set; }
    }
}
