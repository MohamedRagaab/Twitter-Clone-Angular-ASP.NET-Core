using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterCloneAPI.Models
{
    public class Friend
    {
        public int Id { get; set; }
        public string name { get; set; }
        public User User;
    }
}
