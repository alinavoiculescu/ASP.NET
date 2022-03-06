using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Entities
{
    public class ArticlePhoto
    {
        public string ArticleID { get; set; }
        public string PhotoID { get; set; }
        public string Description { get; set; }
        public virtual Article Article { get; set; }
        public virtual Photo Photo { get; set; }
    }
}
