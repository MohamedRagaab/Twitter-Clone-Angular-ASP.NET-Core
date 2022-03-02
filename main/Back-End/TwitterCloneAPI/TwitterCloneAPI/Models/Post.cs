using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterCloneAPI.Models
{
    public class Post
    {
        public int Id { get; set; }
        public int Shares { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public List<string> Comments;
        public List<string> Likes;
        public User User;
    }
}
