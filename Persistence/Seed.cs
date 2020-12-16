using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser
                    {
                        DisplayName = "Bob",
                        UserName = "bob",
                        Email = "bob@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Tom",
                        UserName = "tom",
                        Email = "tom@test.com"
                    },
                    new AppUser
                    {
                        DisplayName = "Jane",
                        UserName = "jane",
                        Email = "jane@test.com"
                    }
                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            
            
            if(!context.TeaProducts.Any())
            {
                var teaproducts = new List<TeaProduct>
                {
                    new TeaProduct
                    {
                        Title = "Green Tea Greenland",
                        Description = "Its green",
                        Price =  5.50 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(-2),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Green Tea UK",
                        Description = "Its green",
                        Price =  7.50 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(-1),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Green Tea Revolution",
                        Description = "Its green",
                        Price =  10.00 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(1),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Black Tea Turkey's Taste",
                        Description = "Its not green",
                        Price =  15.20 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(2),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Black Tea Radiate",
                        Description = "Its not green",
                        Price =  2.80 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(3),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Tribulus Terrestris Tea",
                        Description = "Its not green",
                        Price =  5.50 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(4),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Herbal Tea",
                        Description = "Its not green",
                        Price =  6.60 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(5),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Oolong",
                        Description = "Its not green",
                        Price =  4.20 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(6),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "White Tea Sunrise",
                        Description = "Its not green",
                        Price =  2.40 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(7),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    },
                    new TeaProduct
                    {
                        Title = "Yellow Tea Golden Shower",
                        Description = "Its not green",
                        Price =  5.50 ,
                        Reduced = false,
                        Date = DateTime.Now.AddMonths(8),
                        ImagePath = "https://firebasestorage.googleapis.com/v0/b/mvc-e-commerse.appspot.com/o/images%2Fwao.PNG?alt=media&token=48ed1e27-cf7b-4176-81c9-a97505060009"
                    }
                };
                context.TeaProducts.AddRange(teaproducts);
                context.SaveChanges();
            }
        }
    }
}