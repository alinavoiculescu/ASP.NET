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
    public class ArticlePhotoController : ControllerBase
    {
        private readonly IArticlePhotosManager manager;

        public ArticlePhotoController(IArticlePhotosManager articlephotosManager)
        {
            this.manager = articlephotosManager;
        }

        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetArticlesWithPhotos()
        {
            var articlesphotos = manager.GetArticlesWithPhotos();

            return Ok(articlesphotos);
        }

        [HttpGet("byId/{id}")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetByID([FromRoute] string id)
        {
            var articlephotos = manager.GetArticlePhotosByID(id);

            return Ok(articlephotos);
        }

        [HttpPost]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Create([FromBody] ArticlePhotoModel articlePhotoModel)
        {
            manager.Create(articlePhotoModel);

            return Ok();
        }

        [HttpPut]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Update([FromBody] ArticlePhotoModel articlePhotoModel)
        {
            manager.Update(articlePhotoModel);

            return Ok();
        }

        [HttpDelete("{idArticle}-{idPhoto}")]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Delete([FromRoute] string idArticle, [FromRoute] string idPhoto)
        {
            manager.Delete(idArticle, idPhoto);

            return Ok();
        }
    }
}
