using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactList.Data.Data.Models
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
        public bool Execute { get; set; }
        public DateTime Data { get; set; }
    }
}
