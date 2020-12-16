using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Domain;
using Persistence;
using FluentValidation;

namespace Application.TeaProducts
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

            public string Title { get; set; }

            public string Description { get; set; }

            public double Price { get; set; }

            public DateTime Date { get; set; }

            public Boolean Reduced { get; set; }

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
                var teaProduct = new TeaProduct
                {
                    Id = request.Id,
                    Title = request.Title,
                    Description = request.Description,
                    Price = request.Price,
                    Date = request.Date,
                    Reduced = request.Reduced,
                    ImagePath = request.ImagePath

                };

                _context.TeaProducts.Add(teaProduct);
                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}