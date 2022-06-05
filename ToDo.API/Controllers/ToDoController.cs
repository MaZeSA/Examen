using ContactList.Data.Data.Classes;
using ContactList.Data.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactList.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly IToDoRepository _ToDoRepository;

        public ToDoController(IToDoRepository contactListRepository)
        {
            _ToDoRepository = contactListRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetToDoList()
        {
            List<ToDo> ToDoList = await _ToDoRepository.GetToDoListAsync();
            return Ok(ToDoList);
        }

       [HttpPost]
        public async Task<IActionResult> AddToDo(ToDo todo)
        {
            await _ToDoRepository.CreateNewToDoAsync(todo);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> RemoveToDo(int id )
        {
            await _ToDoRepository.RemoveToDo(id);
            return Ok();
        }

     
    }
}
