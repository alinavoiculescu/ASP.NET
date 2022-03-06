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
    public class PageController : ControllerBase
    {
        private readonly IPagesManager manager;

        public PageController(IPagesManager pagesManager)
        {
            this.manager = pagesManager;
        }

        [HttpGet]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetPages()
        {
            var pages = manager.GetPages();

            return Ok(pages);
        }

        //eager-loading
        [HttpGet("select-id")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetIDs()
        {
            var idList = manager.GetPagesIDsList();

            return Ok(idList);
        }

        [HttpGet("byId/{id}")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> GetByID([FromRoute] string id)
        {
            var page = manager.GetPageByID(id);

            return Ok(page);
        }

        [HttpGet("join")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> Join()
        {
            var pagesWithArticles = manager.GetPagesWithArticles();

            return Ok(pagesWithArticles);
        }

        [HttpGet("filter")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> Filtered()
        {
            var pagesFiltered = manager.GetPagesFiltered();

            return Ok(pagesFiltered);
        }

        [HttpGet("order-by-asc")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> OrderByAsc()
        {
            var orderedPages = manager.GetOrderedPages();

            return Ok(orderedPages);
        }

        [HttpGet("order-by-desc")]
        //[Authorize(Policy = "BasicUser")]
        public async Task<IActionResult> OrderByDesc()
        {
            var orderedPages = manager.GetDescOrderedPages();

            return Ok(orderedPages);
        }

        [HttpPost]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Create([FromBody] PageModel pageModel)
        {
            manager.Create(pageModel);

            return Ok();
        }

        [HttpPut]
        //[Authorize(Policy = "Admin")]
        public async Task<IActionResult> Update([FromBody] PageModel pageModel)
        {
            manager.Update(pageModel);

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
