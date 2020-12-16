// using System.Threading;
// using System.Threading.Tasks;
// using Domain;
// using MediatR;
// using Persistence;

// namespace Application.User
// {
//     public class Login
//     {
//         public class Query : IRequest<AppUser> 
//         {
//             public string Email { get; set; }
//             public string password { get; set; }
//         }

//         //In order to continue with the Login Handler(Section 12, video 157), first watch
//         // and copy the validation section(Section 10)
//         public class QueryValidator : AbstractValidator<Query>
//         {

//         }
        
//                 public class Handler : IRequestHandler<Query, AppUser>
//                 {
//                     private readonly DataContext _context;
//                     public Handler(DataContext context)
//                     {
//                         _context = context;
//                     }
        
//                     public async Task<AppUser> Handle(Query request, CancellationToken cancellationToken)
//                     {
//                         //Handler logic goes here
//                     }
//                 }
//     }
// }