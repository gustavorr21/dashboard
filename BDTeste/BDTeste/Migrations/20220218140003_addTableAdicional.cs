using Microsoft.EntityFrameworkCore.Migrations;

namespace BDTeste.Migrations
{
    public partial class addTableAdicional : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "adicionalsid",
                table: "Venda",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Adicional",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nomeAdicional = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    preco = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Vendaid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adicional", x => x.id);
                    table.ForeignKey(
                        name: "FK_Adicional_Venda_Vendaid",
                        column: x => x.Vendaid,
                        principalTable: "Venda",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Venda_adicionalsid",
                table: "Venda",
                column: "adicionalsid");

            migrationBuilder.CreateIndex(
                name: "IX_Adicional_Vendaid",
                table: "Adicional",
                column: "Vendaid");

            migrationBuilder.AddForeignKey(
                name: "FK_Venda_Adicional_adicionalsid",
                table: "Venda",
                column: "adicionalsid",
                principalTable: "Adicional",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Venda_Adicional_adicionalsid",
                table: "Venda");

            migrationBuilder.DropTable(
                name: "Adicional");

            migrationBuilder.DropIndex(
                name: "IX_Venda_adicionalsid",
                table: "Venda");

            migrationBuilder.DropColumn(
                name: "adicionalsid",
                table: "Venda");
        }
    }
}
