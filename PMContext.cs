using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlyPal.Models;
using FlyPal.Models.AppModels;
using FlyPal.Models.UtilityModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FlyPal.DataContext
{
    public class PMContext : IdentityDbContext<User, Role, int>
    {
        public PMContext(DbContextOptions<PMContext> options)
            : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Add your customizations after calling base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().ToTable("Users");

            modelBuilder.Entity<User>()
                .Property(u => u.DateCreated)
                .HasDefaultValue(DateTime.Now);

            modelBuilder.Entity<User>()
                .Property(u => u.DateModified)
                .HasDefaultValue(DateTime.Now);
                
            modelBuilder.Entity<Complaints>().HasOne(c => c.User).WithMany(u => u.Complaints).OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Role>().ToTable("Roles");
            modelBuilder.Entity<IdentityUserClaim<int>>().ToTable("UserClaims");
            modelBuilder.Entity<IdentityUserRole<int>>().ToTable("UserRoles");
            modelBuilder.Entity<IdentityUserLogin<int>>().ToTable("UserLogins");
            modelBuilder.Entity<IdentityRoleClaim<int>>().ToTable("RoleClaims");
            modelBuilder.Entity<IdentityUserToken<int>>().ToTable("UserTokens");
        }

        public DbSet<Code> Codes { get; set; }
        public DbSet<Log> Logs { get; set; }
        public DbSet<Media> Media { get; set; }
        public DbSet<Status> Statuses { get; set; }
        public DbSet<Complaints> Complaints { get; set; }
        public DbSet<ComplaintsCategory> ComplaintsCategories { get; set; }

    }
}
