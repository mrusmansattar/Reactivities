using Microsoft.EntityFrameworkCore;
using DomainClassLib;
namespace PersistanceClassLib
{
    public class DBContext: DbContext
    {
        public DBContext(DbContextOptions options): base(options)
        {
            
        }

        public DbSet<Activity> Activities { get; set; }
    }
}