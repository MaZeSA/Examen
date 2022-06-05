using ContactList.Data.Data.Context;
using ContactList.Data.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Data.Data.Classes
{
    public class ToDoRepository : IToDoRepository
    {
        public async Task CreateNewToDoAsync(ToDo todo)
        {
            using (var context = new AppDbContext())
            {
              await context.ToDoList.AddAsync(todo);
                context.SaveChanges();
            }
        }

        public async Task<List<ToDo>> GetToDoListAsync()
        {
            using(var context = new AppDbContext())
            {
                return await context.ToDoList.ToListAsync();
            }
        }

        public async Task<List<ToDo>> RemoveToDo(int id)
        {
            using (var context = new AppDbContext())
            {
                var contacts = await context.ToDoList.FirstOrDefaultAsync(x => x.Id == id);
                if (contacts != null)
                {
                    context.ToDoList.Remove(contacts);
                    context.SaveChanges();
                }
            }
            return await GetToDoListAsync();
        }

    }
}
