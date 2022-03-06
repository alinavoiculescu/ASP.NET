using MyProject.Entities;
using MyProject.Models;
using MyProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public class ArticlePhotosManager : IArticlePhotosManager
    {
        private readonly IArticlePhotosRepository articlePhotosRepository;

        public ArticlePhotosManager(IArticlePhotosRepository articlePhotosRepository)
        {
            this.articlePhotosRepository = articlePhotosRepository;
        }

        public List<ArticlePhoto> GetArticlesWithPhotos()
        {
            return articlePhotosRepository.GetArticlePhotosIQueryable().ToList();
        }

        public List<string> GetArticlePhotosByID(string id)
        {
            var articlePhotos = articlePhotosRepository.GetArticlePhotosIQueryable();

            var photos = articlePhotos.Where(x => x.ArticleID == id)
                .Select(x => x.PhotoID)
                .ToList();

            return photos;
        }

        public void Create(ArticlePhotoModel model)
        {
            var newArticlePhoto = new ArticlePhoto
            {
                ArticleID = model.ArticleID,
                PhotoID = model.PhotoID
            };

            articlePhotosRepository.Create(newArticlePhoto);
        }

        public void Update(ArticlePhotoModel model)
        {
            var articlePhoto = articlePhotosRepository.GetArticlePhotosIQueryable()
                .FirstOrDefault(x => x.ArticleID == model.ArticleID && x.PhotoID == model.PhotoID);

            if (model.Description != "")
            {
                articlePhoto.Description = model.Description;
            }
            

            articlePhotosRepository.Update(articlePhoto);
        }

        public void Delete(string idArticle, string idPhoto)
        {
            var articlePhoto = articlePhotosRepository.GetArticlePhotosIQueryable()
                .FirstOrDefault(x => x.ArticleID == idArticle && x.PhotoID == idPhoto);

            articlePhotosRepository.Delete(articlePhoto);
        }
    }
}

