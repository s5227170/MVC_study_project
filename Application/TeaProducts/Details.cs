using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace App.TeaProducts
{
    public class Details
    {
        public class Query : IRequest<TeaProduct>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, TeaProduct>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<TeaProduct> Handle(Query request, CancellationToken cancellationToken)
            {
                var teaProduct = await _context.TeaProducts.FindAsync(request.Id);

                return teaProduct;
            }
        }
    }
}