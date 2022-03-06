using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public interface IArticlePhotosRepository
    {
        IQueryable<ArticlePhoto> GetArticlePhotosIQueryable();

        void Create(ArticlePhoto articlePhoto);

        void Update(ArticlePhoto articlePhoto);

        void Delete(ArticlePhoto articlePhoto);
    }
}
