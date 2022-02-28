using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Models
{
  public class Adicional
  {
    [Key]
    public int id { get; set; }

    public string nomeAdicional { get; set; }

    public decimal preco { get; set; }
  }
}
