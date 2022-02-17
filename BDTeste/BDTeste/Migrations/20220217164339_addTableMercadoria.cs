using Microsoft.EntityFrameworkCore.Migrations;

namespace BDTeste.Migrations
{
    public partial class addTableMercadoria : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MercadoriaProduto",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    codigoMercadoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nomeMercadoria = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    valorProduto = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MercadoriaProduto", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MercadoriaProduto");
        }
    }
}
