using MyProject.Entities;
using MyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public interface IPagesManager
    {
        List<Page> GetPages();

        List<string> GetPagesIDsList();

        Page GetPageByID(string id);

        void Create(PageModel model);

        void Update(PageModel model);

        void Delete(string id);

        List<Page> GetPagesWithArticles();

        List<Page> GetPagesFiltered();

        List<FirstArticleOfPageModel> GetOrderedPages();

        List<FirstArticleOfPageModel> GetDescOrderedPages();
    }
}
