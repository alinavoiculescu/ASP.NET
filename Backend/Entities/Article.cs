using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Entities
{
    public class Article
    {
        public string ID { get; set; }
        public string Title { get; set; }
        public int ArticleSize { get; set; }
        public string ArticleText { get; set; }
        public string PageID { get; set; }
        public virtual Page Page { get; set; }
        public virtual ICollection<ArticlePhoto> ArticlePhotos { get; set; }
    }
}
