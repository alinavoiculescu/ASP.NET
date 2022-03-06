using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Entities
{
    public class Photo
    {
        public string ID { get; set; }
        public string Title { get; set; }
        public virtual ICollection<ArticlePhoto> ArticlePhotos { get; set; }
        public virtual Address Address { get; set; }
    }
}
