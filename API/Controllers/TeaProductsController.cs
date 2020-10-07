using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using App.TeaProducts;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeaProductsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public TeaProductsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<TeaProduct>>> List ()
        {
            return await _mediator.Send(new List.Query());
        }
        [HttpGet("{id")]
        public async Task<ActionResult<TeaProduct>> Details(Guid id)
        {
            return await _mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }
    }
}