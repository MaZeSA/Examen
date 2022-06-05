using ContactList.Data.Data.Context;
using ContactList.Data.Data.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Data.Data.Intitializer
{
    public class AppInitializer
    {
        public static async Task Seed(IApplicationBuilder applicationBuilder)
        {

            using (var serviceScope = applicationBuilder.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<AppDbContext>();

                if (!context.ToDoList.Any())
                {
                    context.ToDoList.AddRange(
                            new ToDo()
                            {
                                Name = "Test ToDo",
                                Execute= false,
                                Text = "Test Text For Exam",
                                Data = new DateTime(2022, 7, 20),
                            },
                             new ToDo()
                             {
                                 Name = "End Test ToDo",
                                 Execute = true,
                                 Text = "End Test Text For Exam",
                                 Data = new DateTime(2021, 2, 3),
                             },
                              new ToDo()
                              {
                                  Name = "By Pc",
                                  Execute = false,
                                  Text = "By New PC",
                                  Data = new DateTime(2028, 5, 16),
                              }
                        );
                    await context.SaveChangesAsync();
                }

            }
        }
    }
}
