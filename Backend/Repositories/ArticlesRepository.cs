using Microsoft.EntityFrameworkCore;
using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public class ArticlesRepository : IArticlesRepository
    {
        private MyProjectContext db;

        public ArticlesRepository(MyProjectContext db)
        {
            this.db = db;
        }

        public IQueryable<Article> GetArticlesIQueryable()
        {
            var articles = db.Articles;

            return articles;
        }

        public void Create(Article article)
        {
            db.Articles.Add(article);

            db.SaveChanges();
        }

        public void Update(Article article)
        {
            db.Articles.Update(article);

            db.SaveChanges();
        }

        public void Delete(Article article)
        {
            db.Articles.Remove(article);

            db.SaveChanges();
        }
    }
}
