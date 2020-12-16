using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using FluentValidation;
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

            public double? Price { get; set; }

            public DateTime? Date { get; set; }

            public Boolean? Reduced { get; set; }

            public string ImagePath { get; set; }

        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.Title).NotEmpty();
                RuleFor(x => x.Description).NotEmpty();
                RuleFor(x => x.Price).NotEmpty();
                RuleFor(x => x.Date).NotEmpty();
                RuleFor(x => x.Reduced).NotEmpty();
                RuleFor(x => x.ImagePath).NotEmpty();
            }
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