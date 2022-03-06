using Microsoft.EntityFrameworkCore;
using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public class ArticlePhotosRepository : IArticlePhotosRepository
    {
        private MyProjectContext db;

        public ArticlePhotosRepository(MyProjectContext db)
        {
            this.db = db;
        }

        public IQueryable<ArticlePhoto> GetArticlePhotosIQueryable()
        {
            var articlePhotos = db.ArticlePhotos;

            return articlePhotos;
        }

        public void Create(ArticlePhoto articlePhoto)
        {
            db.ArticlePhotos.Add(articlePhoto);

            db.SaveChanges();
        }

        public void Update(ArticlePhoto articlePhoto)
        {
            db.ArticlePhotos.Update(articlePhoto);

            db.SaveChanges();
        }

        public void Delete(ArticlePhoto articlePhoto)
        {
            db.ArticlePhotos.Remove(articlePhoto);

            db.SaveChanges();
        }
    }
}
