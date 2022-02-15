using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Models
{
    public class Produto
    {
      [Key]
      public int id { get; set; }

      [Required]
      public string codigoProduto { get; set; }

      [Required]
      public string nomeProduto { get; set; }

      [Required]
      public double valorProduto { get; set; }

      public string quantidade { get; set; }

      public DateTime dataCompra { get; set; }

      public double valorTotal { get; set; }

    }
}
