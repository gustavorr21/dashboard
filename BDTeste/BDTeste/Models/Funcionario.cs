using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Models
{
  public class Funcionario
  {
    [Key]
    public string id { get; set; }

    [Required]
    public string nomeFuncionario { get; set; }

    [Required]
    public string emailFuncionario { get; set; }

    public string cpfFuncionario { get; set; }

    public string senha { get; set; }

  }
}
