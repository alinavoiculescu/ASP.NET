using MyProject.Entities;
using MyProject.Models;
using MyProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public class PagesManager : IPagesManager
    {
        private readonly IPagesRepository pagesRepository;

        public PagesManager(IPagesRepository pagesRepository)
        {
            this.pagesRepository = pagesRepository;
        }

        public List<Page> GetPages()
        {
            return pagesRepository.GetPagesIQueryable().ToList();
        }

        public List<string> GetPagesIDsList()
        {
            var pages = pagesRepository.GetPagesIQueryable();

            var idList = pages.Select(x => x.ID)
                .ToList();

            return idList;
        }

        public Page GetPageByID(string id)
        {
            var page = pagesRepository.GetPagesIQueryable()
                .FirstOrDefault(x => x.ID == id);

            return page;
        }

        public List<FirstArticleOfPageModel> GetOrderedPages()
        {
            var orderedPages = pagesRepository.GetPagesWithAtLeastOneArticle()
                .Where(x => x.Articles.Count > 0)
                .Select(x => new FirstArticleOfPageModel { ID = x.ID, FirstArticleTitle = x.Articles.FirstOrDefault().Title })
                .OrderBy(x => x.FirstArticleTitle)
                .ToList();

            return orderedPages;
        }

        public List<FirstArticleOfPageModel> GetDescOrderedPages()
        {
            var orderedPages = pagesRepository.GetPagesWithAtLeastOneArticle()
                .Where(x => x.Articles.Count > 0)
                .Select(x => new FirstArticleOfPageModel { ID = x.ID, FirstArticleTitle = x.Articles.FirstOrDefault().Title })
                .OrderByDescending(x => x.FirstArticleTitle)
                .ToList();

            return orderedPages;
        }

        public List<Page> GetPagesFiltered()
        {
            var pages = pagesRepository.GetPagesWithAtLeastOneArticle();

            var filtered = pages.Where(x => x.Articles.Count > 0)
                .ToList();

            return filtered;
        }

        public List<Page> GetPagesWithArticles()
        {
            var pagesWithArticles = pagesRepository.GetPagesWithArticles();

            return pagesWithArticles.ToList();
        }

        public void Create(PageModel model)
        {
            var newPage = new Page
            {
                ID = model.ID,
                PublicationDate = model.PublicationDate,
                ShortDescription = model.ShortDescription
            };

            pagesRepository.Create(newPage);
        }

        public void Update(PageModel model)
        {
            var page = GetPageByID(model.ID);

            page.PublicationDate = model.PublicationDate;
            page.ShortDescription = model.ShortDescription;

            pagesRepository.Update(page);
        }

        public void Delete(string id)
        {
            var page = GetPageByID(id);

            pagesRepository.Delete(page);
        }
    }
}
