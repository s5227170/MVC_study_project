using System.Collections.Generic;
using MediatR;
using Domain;
using System.Threading.Tasks;
using System.Threading;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace App.TeaProducts
{
    public class List
    {
        public class Query : IRequest<List<TeaProduct>> { }

        public class Handler : IRequestHandler<Query, List<TeaProduct>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<TeaProduct>> Handle(Query request, CancellationToken cancellationToken)
            {
                var teaProducts = await _context.TeaProducts.ToListAsync();

                return teaProducts;
            }
        }
    }
}