using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BDTeste.Migrations
{
    public partial class tabelasDoSistema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    senha = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefone = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Funcionario",
                columns: table => new
                {
                    id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    nomeFuncionario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    emailFuncionario = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cpfFuncionario = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    senha = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Funcionario", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Produto",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    codigoProduto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    valorProduto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    quantidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    dataCompra = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    valorTotal = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produto", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Venda",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    codigoProduto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    nomeProduto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    valorProduto = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dataVenda = table.Column<DateTime>(type: "datetime2", nullable: false),
                    quantidade = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    valorTotal = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    idFuncionario = table.Column<int>(type: "int", nullable: false),
                    Funcionarioid = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Venda", x => x.id);
                    table.ForeignKey(
                        name: "FK_Venda_Funcionario_Funcionarioid",
                        column: x => x.Funcionarioid,
                        principalTable: "Funcionario",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Venda_Funcionarioid",
                table: "Venda",
                column: "Funcionarioid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Produto");

            migrationBuilder.DropTable(
                name: "Venda");

            migrationBuilder.DropTable(
                name: "Funcionario");
        }
    }
}
