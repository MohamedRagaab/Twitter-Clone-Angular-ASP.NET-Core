using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterCloneAPI.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public string Image { get; set; }
        public string Date { get; set; }
        public List<User> Friends;
        public List<Post> Posts;
    }
}
