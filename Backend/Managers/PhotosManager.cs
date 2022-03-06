using MyProject.Entities;
using MyProject.Models;
using MyProject.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public class PhotosManager : IPhotosManager
    {
        private readonly IPhotosRepository photosRepository;

        public PhotosManager(IPhotosRepository photosRepository)
        {
            this.photosRepository = photosRepository;
        }

        public List<Photo> GetPhotos()
        {
            return photosRepository.GetPhotosIQueryable().ToList();
        }

        public List<string> GetPhotosIDsList()
        {
            var photos = photosRepository.GetPhotosIQueryable();

            var idList = photos.Select(x => x.ID)
                .ToList();

            return idList;
        }

        public Photo GetPhotoByID(string id)
        {
            var photo = photosRepository.GetPhotosIQueryable()
                .FirstOrDefault(x => x.ID == id);

            return photo;
        }

        public void Create(PhotoModel model)
        {
            var newPhoto = new Photo
            {
                ID = model.ID,
                Title = model.Title
            };

            photosRepository.Create(newPhoto);
        }

        public void Update(PhotoModel model)
        {
            var photo = GetPhotoByID(model.ID);

            photo.Title = model.Title;

            photosRepository.Update(photo);
        }

        public void Delete(string id)
        {
            var article = GetPhotoByID(id);

            photosRepository.Delete(article);
        }
    }
}
