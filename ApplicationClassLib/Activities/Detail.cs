using System;
using System.Threading;
using System.Threading.Tasks;
using DomainClassLib;
using MediatR;
using PersistanceClassLib;

namespace ApplicationClassLib.Activities
{
    public class Detail
    {
        public class Query:IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Activity>
        {
            private readonly DBContext _context;
            public Handler(DBContext context)
            {
                _context=context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}