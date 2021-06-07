using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DomainClassLib;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PersistanceClassLib;

namespace ReactivitiesAPI.Controllers
{
    public class ActivitiesController : BaseAPIController
    {
        private readonly DBContext _context;
        public ActivitiesController(DBContext context)
        {
            _context = context;

        }
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{Id}")] //Activities/Id
        public async Task<ActionResult<Activity>> GetActivity(Guid Id)
        {
            return await _context.Activities.FindAsync(Id);
        }
    }
}