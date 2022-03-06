using MyProject.Entities;
using MyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public interface IArticlePhotosManager
    {
        List<ArticlePhoto> GetArticlesWithPhotos();

        List<string> GetArticlePhotosByID(string id);

        void Create(ArticlePhotoModel model);

        void Update(ArticlePhotoModel model);

        void Delete(string idArticle, string idPhoto);
    }
}