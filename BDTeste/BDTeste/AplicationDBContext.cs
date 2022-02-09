using BDTeste.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste
{
  public class AplicationDBContext : DbContext
  {
    public DbSet<Cliente> Clientes { get; set; }

    public AplicationDBContext(DbContextOptions<AplicationDBContext> options): base(options)
    {

    }
  }
}
