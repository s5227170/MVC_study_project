using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using MediatR;
using Persistence;

namespace Application.TeaProducts
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;

            }

            public async Task<Unit> Handle(Command request,
             CancellationToken cancellationToken)
            {
                var teaProduct = await _context.TeaProducts.FindAsync(request.Id);

                if(teaProduct == null)
                    throw new RestException(HttpStatusCode.NotFound, new {teaProduct = "Not Found!"});

                    _context.Remove(teaProduct);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}