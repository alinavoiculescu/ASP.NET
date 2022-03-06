using Microsoft.EntityFrameworkCore;
using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public class PagesRepository : IPagesRepository
    {
        private MyProjectContext db;

        public PagesRepository(MyProjectContext db)
        {
            this.db = db;
        }

        public IQueryable<Page> GetPagesIQueryable()
        {
            var pages = db.Pages;

            return pages;
        }

        public IQueryable<Page> GetPagesWithArticles()
        {
            var pages = GetPagesIQueryable().Include(x => x.Articles);

            return pages;
        }

        public IQueryable<Page> GetPagesWithAtLeastOneArticle()
        {
            var pages = GetPagesWithArticles();

            return pages;
        }

        public void Create(Page page)
        {
            db.Pages.Add(page);

            db.SaveChanges();
        }

        public void Update(Page page)
        {
            db.Pages.Update(page);

            db.SaveChanges();
        }

        public void Delete(Page page)
        {
            db.Pages.Remove(page);

            db.SaveChanges();
        }
    }
}
