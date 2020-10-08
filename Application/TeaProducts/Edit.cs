using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.TeaProducts
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

            public string Title { get; set; }

            public string Description { get; set; }

            public decimal? Price { get; set; }

            public DateTime? Date { get; set; }

            public Boolean? Reduced { get; set; }

            public string ImagePath { get; set; }

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

                if (teaProduct == null)
                    throw new Exception("Could not find Product!");

                teaProduct.Title=request.Title ?? teaProduct.Title;
                teaProduct.Description=request.Title ?? teaProduct.Title;
                teaProduct.Price=request.Price ?? teaProduct.Price;
                teaProduct.Date=request.Date ?? teaProduct.Date;
                teaProduct.Reduced=request.Reduced ?? teaProduct.Reduced;
                teaProduct.ImagePath=request.ImagePath ?? teaProduct.ImagePath;


                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}