using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Repositories
{
    public interface IPhotosRepository
    {
        IQueryable<Photo> GetPhotosIQueryable();

        void Create(Photo photo);

        void Update(Photo photo);

        void Delete(Photo photo);
    }
}