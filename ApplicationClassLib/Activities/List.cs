using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using DomainClassLib;
using MediatR;
using Microsoft.EntityFrameworkCore;
using PersistanceClassLib;

namespace ApplicationClassLib.Activities
{
    public class List
    {
        public class Query:IRequest<List<Activity>>
        {
            
        }

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DBContext _context;
            public Handler(DBContext context)
            {
                _context=context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}