using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Entities
{
    public class MyProjectContext : IdentityDbContext<User, Role, string, IdentityUserClaim<string>,
                                                      UserRole, IdentityUserLogin<string>,
                                                      IdentityRoleClaim<string>, IdentityUserToken<string>>
    {
        public MyProjectContext(DbContextOptions<MyProjectContext> options) : base(options) { }
        public DbSet<Page> Pages { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<ArticlePhoto> ArticlePhotos { get; set; }
        public DbSet<Address> Addresses { get; set; }

        /*protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLoggerFactory(LoggerFactory.Create(builder => builder.AddConsole()))
                .UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Initial Catalog=MyProject;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }*/

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //One to Many
            builder.Entity<Page>()
                .HasMany(p => p.Articles)
                .WithOne(a => a.Page);

            //Many to Many
            builder.Entity<ArticlePhoto>().HasKey(ap => new { ap.ArticleID, ap.PhotoID });

            builder.Entity<ArticlePhoto>()
                .HasOne(ap => ap.Article)
                .WithMany(a => a.ArticlePhotos)
                .HasForeignKey(ap => ap.ArticleID);

            builder.Entity<ArticlePhoto>()
                .HasOne(ap => ap.Photo)
                .WithMany(p => p.ArticlePhotos)
                .HasForeignKey(ap => ap.PhotoID);

            //One to One
            builder.Entity<Photo>()
                .HasOne(p => p.Address)
                .WithOne(a => a.Photo);
        }
    }
}
