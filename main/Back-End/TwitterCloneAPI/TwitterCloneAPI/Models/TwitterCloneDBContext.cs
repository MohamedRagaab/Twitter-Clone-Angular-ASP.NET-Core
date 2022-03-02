using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwitterCloneAPI.Models
{
    public class TwitterCloneDBContext : DbContext
    {
        public TwitterCloneDBContext(DbContextOptions<TwitterCloneDBContext>options)
            :base(options)
        {

        }

        public virtual DbSet<User> User { get; set; }
        public virtual DbSet<Post> Post { get; set; }
        public virtual DbSet<Friend> Friend { get; set; }
    }
}
