using MyProject.Entities;
using MyProject.Models;
using MyProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public class ArticlesManager : IArticlesManager
    {
        private readonly IArticlesRepository articlesRepository;

        public ArticlesManager(IArticlesRepository articlesRepository)
        {
            this.articlesRepository = articlesRepository;
        }

        public List<Article> GetArticles()
        {
            return articlesRepository.GetArticlesIQueryable().ToList();
        }

        public List<string> GetArticlesIDsList()
        {
            var articles = articlesRepository.GetArticlesIQueryable();

            var idList = articles.Select(x => x.ID)
                .ToList();

            return idList;
        }

        public Article GetArticleByID(string id)
        {
            var article = articlesRepository.GetArticlesIQueryable()
                .FirstOrDefault(x => x.ID == id);

            return article;
        }

        public void Create(ArticleModel model)
        {
            var newArticle = new Article
            {
                ID = model.ID,
                Title = model.Title,
                ArticleSize = model.ArticleSize,
                ArticleText = model.ArticleText,
                PageID = model.PageID
            };

            articlesRepository.Create(newArticle);
        }

        public void Update(ArticleModel model)
        {
            var article = GetArticleByID(model.ID);

            article.Title = model.Title;
            article.ArticleSize = model.ArticleSize;
            article.ArticleText = model.ArticleText;
            article.PageID = model.PageID;

            articlesRepository.Update(article);
        }

        public void Delete(string id)
        {
            var article = GetArticleByID(id);

            articlesRepository.Delete(article);
        }
    }
}
