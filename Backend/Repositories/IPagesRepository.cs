using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public interface IPagesRepository
    {
        IQueryable<Page> GetPagesIQueryable();

        void Create(Page page);

        void Update(Page page);

        void Delete(Page page);

        IQueryable<Page> GetPagesWithArticles();

        IQueryable<Page> GetPagesWithAtLeastOneArticle();
    }
}
