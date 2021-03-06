// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MyProject.Entities;

namespace MyProject.Migrations
{
    [DbContext(typeof(MyProjectContext))]
    [Migration("20220118154353_AddedManyToManyTablePhoto")]
    partial class AddedManyToManyTablePhoto
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("MyProject.Entities.Article", b =>
                {
                    b.Property<string>("ID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("ArticleSize")
                        .HasColumnType("int");

                    b.Property<string>("ArticleText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PageID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("PageID");

                    b.ToTable("Articles");
                });

            modelBuilder.Entity("MyProject.Entities.ArticlePhoto", b =>
                {
                    b.Property<string>("ArticleID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("PhotoID")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("ArticleID", "PhotoID");

                    b.HasIndex("PhotoID");

                    b.ToTable("ArticlePhotos");
                });

            modelBuilder.Entity("MyProject.Entities.Page", b =>
                {
                    b.Property<string>("ID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("PublicationDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("ShortDescription")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Pages");
                });

            modelBuilder.Entity("MyProject.Entities.Photo", b =>
                {
                    b.Property<string>("ID")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Photos");
                });

            modelBuilder.Entity("MyProject.Entities.Article", b =>
                {
                    b.HasOne("MyProject.Entities.Page", "Page")
                        .WithMany("Articles")
                        .HasForeignKey("PageID");

                    b.Navigation("Page");
                });

            modelBuilder.Entity("MyProject.Entities.ArticlePhoto", b =>
                {
                    b.HasOne("MyProject.Entities.Article", "Article")
                        .WithMany("ArticlePhotos")
                        .HasForeignKey("ArticleID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("MyProject.Entities.Photo", "Photo")
                        .WithMany("ArticlePhotos")
                        .HasForeignKey("PhotoID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Article");

                    b.Navigation("Photo");
                });

            modelBuilder.Entity("MyProject.Entities.Article", b =>
                {
                    b.Navigation("ArticlePhotos");
                });

            modelBuilder.Entity("MyProject.Entities.Page", b =>
                {
                    b.Navigation("Articles");
                });

            modelBuilder.Entity("MyProject.Entities.Photo", b =>
                {
                    b.Navigation("ArticlePhotos");
                });
#pragma warning restore 612, 618
        }
    }
}
