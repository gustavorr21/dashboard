// <auto-generated />
using System;
using BDTeste;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BDTeste.Migrations
{
    [DbContext(typeof(AplicationDBContext))]
    [Migration("20220218140003_addTableAdicional")]
    partial class addTableAdicional
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.3")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BDTeste.Models.Adicional", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Vendaid")
                        .HasColumnType("int");

                    b.Property<string>("nomeAdicional")
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("preco")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("id");

                    b.HasIndex("Vendaid");

                    b.ToTable("Adicional");
                });

            modelBuilder.Entity("BDTeste.Models.Cliente", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("senha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("telefone")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("BDTeste.Models.Funcionario", b =>
                {
                    b.Property<string>("id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("cpfFuncionario")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("emailFuncionario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomeFuncionario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("senha")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("Funcionario");
                });

            modelBuilder.Entity("BDTeste.Models.MercadoriaProduto", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("codigoMercadoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nomeMercadoria")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("valorProduto")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.ToTable("MercadoriaProduto");
                });

            modelBuilder.Entity("BDTeste.Models.Produto", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("codigoProduto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("dataCompra")
                        .HasColumnType("datetime2");

                    b.Property<string>("nomeProduto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("quantidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("valorProduto")
                        .HasColumnType("float");

                    b.Property<double>("valorTotal")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.ToTable("Produto");
                });

            modelBuilder.Entity("BDTeste.Models.Venda", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Funcionarioid")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int?>("adicionalsid")
                        .HasColumnType("int");

                    b.Property<string>("codigoProduto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("dataVenda")
                        .HasColumnType("datetime2");

                    b.Property<int>("idFuncionario")
                        .HasColumnType("int");

                    b.Property<string>("nomeProduto")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("quantidade")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("valorProduto")
                        .HasColumnType("float");

                    b.Property<double>("valorTotal")
                        .HasColumnType("float");

                    b.HasKey("id");

                    b.HasIndex("Funcionarioid");

                    b.HasIndex("adicionalsid");

                    b.ToTable("Venda");
                });

            modelBuilder.Entity("BDTeste.Models.Adicional", b =>
                {
                    b.HasOne("BDTeste.Models.Venda", null)
                        .WithMany("adicional")
                        .HasForeignKey("Vendaid");
                });

            modelBuilder.Entity("BDTeste.Models.Venda", b =>
                {
                    b.HasOne("BDTeste.Models.Funcionario", "Funcionario")
                        .WithMany()
                        .HasForeignKey("Funcionarioid");

                    b.HasOne("BDTeste.Models.Adicional", "adicionals")
                        .WithMany()
                        .HasForeignKey("adicionalsid");

                    b.Navigation("adicionals");

                    b.Navigation("Funcionario");
                });

            modelBuilder.Entity("BDTeste.Models.Venda", b =>
                {
                    b.Navigation("adicional");
                });
#pragma warning restore 612, 618
        }
    }
}
