using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DomainClassLib;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ApplicationClassLib.Activities;
using PersistanceClassLib;
using MediatR;

namespace ReactivitiesAPI.Controllers
{
    public class ActivitiesController : BaseAPIController
    {
        // private readonly IMediator _mediator;
        // public ActivitiesController(IMediator mediator)
        // {
        //     _mediator=mediator;
        // }
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{Id}")] //Activities/Id
        public async Task<ActionResult<Activity>> GetActivity(Guid Id)
        {
            return await Mediator.Send(new Detail.Query{Id=Id});
        }

        [HttpPost] //Activities/Id
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            return Ok(await Mediator.Send(new Create.Command{activity=activity}));
        }

        [HttpPut("{Id}")] //Activities/Id
        public async Task<IActionResult> EditActivity(Guid id,Activity activity)
        {
            activity.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{Activity=activity}));
        }

        [HttpDelete("{id}")] //Activities/Id
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id=id}));
        }
    } 
}