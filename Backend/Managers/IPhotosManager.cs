using MyProject.Entities;
using MyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public interface IPhotosManager
    {
        List<Photo> GetPhotos();

        List<string> GetPhotosIDsList();

        Photo GetPhotoByID(string id);

        void Create(PhotoModel model);

        void Update(PhotoModel model);

        void Delete(string id);
    }
}
