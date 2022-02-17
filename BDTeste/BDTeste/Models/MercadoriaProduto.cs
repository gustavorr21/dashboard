using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Models
{
  public class MercadoriaProduto
  {
    [Key]
    public int id { get; set; }

    [Required]
    public string codigoMercadoria { get; set; }

    [Required]
    public string nomeMercadoria{ get; set; }

    [Required]
    public double valorProduto { get; set; }
  }
}
