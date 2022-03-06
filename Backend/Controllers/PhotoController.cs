using MyProject.Entities;
using MyProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyProject.Managers;
using Microsoft.AspNetCore.Authorization;

namespace MyProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhotoController : ControllerBase
    {
        private readonly IPhotosManager manager;

        public PhotoController(IPhotosManager photosManager)
        {
            this.manager = photosManager;
        }

        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetPhotos()
        {
            var photos = manager.GetPhotos();

            return Ok(photos);
        }

        //eager-loading
        [HttpGet("select-id")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetIDs()
        {
            var idList = manager.GetPhotosIDsList();

            return Ok(idList);
        }

        [HttpGet("byId/{id}")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetByID([FromRoute] string id)
        {
            var photo = manager.GetPhotoByID(id);

            return Ok(photo);
        }

        [HttpPost]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Create([FromBody] PhotoModel photoModel)
        {
            manager.Create(photoModel);

            return Ok();
        }

        [HttpPut]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Update([FromBody] PhotoModel photoModel)
        {
            manager.Update(photoModel);

            return Ok();
        }

        [HttpDelete("{id}")]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Delete([FromRoute] string id)
        {
            manager.Delete(id);

            return Ok();
        }
    }
}
