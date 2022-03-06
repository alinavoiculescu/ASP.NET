using MyProject.Entities;
using MyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public interface IArticlesManager
    {
        List<Article> GetArticles();

        List<string> GetArticlesIDsList();

        Article GetArticleByID(string id);

        void Create(ArticleModel model);

        void Update(ArticleModel model);

        void Delete(string id);
    }
}
