using System.Threading;
using System.Threading.Tasks;
using DomainClassLib;
using MediatR;
using PersistanceClassLib;

namespace ApplicationClassLib.Activities
{
    public class Create
    {
        public class Command:IRequest
        {
            public Activity activity  { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DBContext _context;
            public Handler(DBContext context)
            {
                _context=context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.activity);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}