using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using PersistanceClassLib;

namespace ApplicationClassLib.Activities
{
    public class Delete
    {
        public class Command:IRequest
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DBContext _context;

            public Handler(DBContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity= await _context.Activities.FindAsync(request.Id);

                _context.Remove(activity);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }

    }
}