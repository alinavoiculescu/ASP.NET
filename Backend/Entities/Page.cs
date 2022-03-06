using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Entities
{
    public class Page
    {
        public string ID { get; set; }
        public DateTime PublicationDate { get; set; }
        public string ShortDescription { get; set; }
        public virtual ICollection<Article> Articles { get; set; }
    }
}
