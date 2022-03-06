using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Models
{
    public class ArticleModel
    {
        public string ID { get; set; }
        public string Title { get; set; }
        public int ArticleSize { get; set; }
        public string ArticleText { get; set; }
        public string PageID { get; set; }
    }
}
