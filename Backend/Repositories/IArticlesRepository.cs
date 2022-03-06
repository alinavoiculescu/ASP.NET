using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public interface IArticlesRepository
    {
        IQueryable<Article> GetArticlesIQueryable();

        void Create(Article article);

        void Update(Article article);

        void Delete(Article article);
    }
}
