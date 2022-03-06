using Microsoft.EntityFrameworkCore;
using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public class PhotosRepository : IPhotosRepository
    {
        private MyProjectContext db;

        public PhotosRepository(MyProjectContext db)
        {
            this.db = db;
        }

        public IQueryable<Photo> GetPhotosIQueryable()
        {
            var photos = db.Photos;

            return photos;
        }

        public void Create(Photo photo)
        {
            db.Photos.Add(photo);

            db.SaveChanges();
        }

        public void Update(Photo photo)
        {
            db.Photos.Update(photo);

            db.SaveChanges();
        }

        public void Delete(Photo photo)
        {
            db.Photos.Remove(photo);

            db.SaveChanges();
        }
    }
}
