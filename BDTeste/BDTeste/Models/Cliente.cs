using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Models
{
  public class Cliente
  {
    [Key]
    public int id { get; set; }

    [Required]
    public string nome { get; set; }

    [Required]
    public string email { get; set; }

    [Required]
    public string senha { get; set; }

    public string telefone { get; set; }

  }
}
