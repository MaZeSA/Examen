using ContactList.Data.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Data.Data.Classes
{
    public interface IToDoRepository
    {
        Task CreateNewToDoAsync(ToDo user);
        Task<List<ToDo>> GetToDoListAsync();
        Task<List<ToDo>> RemoveToDo(int id);
    }
}
