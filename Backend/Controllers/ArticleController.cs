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
    public class ArticleController : ControllerBase
    {
        private readonly IArticlesManager manager;

        public ArticleController(IArticlesManager articlesManager)
        {
            this.manager = articlesManager;
        }

        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetArticles()
        {
            var articles = manager.GetArticles();

            return Ok(articles);
        }

        //eager-loading
        [HttpGet("select-id")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetIDs()
        {
            var idList = manager.GetArticlesIDsList();

            return Ok(idList);
        }

        [HttpGet("byId/{id}")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetByID([FromRoute] string id)
        {
            var article = manager.GetArticleByID(id);

            return Ok(article);
        }

        [HttpPost]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Create([FromBody] ArticleModel articleModel)
        {
            manager.Create(articleModel);

            return Ok();
        }

        [HttpPut]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Update([FromBody] ArticleModel articleModel)
        {
            manager.Update(articleModel);

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
