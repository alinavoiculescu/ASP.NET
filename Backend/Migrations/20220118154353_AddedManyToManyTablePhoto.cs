using Microsoft.EntityFrameworkCore.Migrations;

namespace MyProject.Migrations
{
    public partial class AddedManyToManyTablePhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Article_Text",
                table: "Articles",
                newName: "ArticleText");

            migrationBuilder.RenameColumn(
                name: "Article_Size",
                table: "Articles",
                newName: "ArticleSize");

            migrationBuilder.CreateTable(
                name: "Photos",
                columns: table => new
                {
                    ID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Photos", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "ArticlePhotos",
                columns: table => new
                {
                    ArticleID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    PhotoID = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticlePhotos", x => new { x.ArticleID, x.PhotoID });
                    table.ForeignKey(
                        name: "FK_ArticlePhotos_Articles_ArticleID",
                        column: x => x.ArticleID,
                        principalTable: "Articles",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArticlePhotos_Photos_PhotoID",
                        column: x => x.PhotoID,
                        principalTable: "Photos",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ArticlePhotos_PhotoID",
                table: "ArticlePhotos",
                column: "PhotoID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ArticlePhotos");

            migrationBuilder.DropTable(
                name: "Photos");

            migrationBuilder.RenameColumn(
                name: "ArticleText",
                table: "Articles",
                newName: "Article_Text");

            migrationBuilder.RenameColumn(
                name: "ArticleSize",
                table: "Articles",
                newName: "Article_Size");
        }
    }
}
