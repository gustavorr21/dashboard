using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BDTeste.Migrations
{
    public partial class addTableDespesas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Despesas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    codigoProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    nomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    valorProduto = table.Column<double>(type: "float", nullable: false),
                    quantidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dataCompra = table.Column<DateTime>(type: "datetime2", nullable: false),
                    valorTotal = table.Column<double>(type: "float", nullable: false),
                    idProduto = table.Column<int>(type: "int", nullable: false),
                    Produtoid = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Despesas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Despesas_Produto_Produtoid",
                        column: x => x.Produtoid,
                        principalTable: "Produto",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Despesas_Produtoid",
                table: "Despesas",
                column: "Produtoid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Despesas");
        }
    }
}
