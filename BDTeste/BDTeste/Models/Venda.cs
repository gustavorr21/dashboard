using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Models
{
  public class Venda
  {
    [Key]
    public int id { get; set; }

    [Required]
    public string codigoProduto { get; set; }

    [Required]
    public string nomeProduto { get; set; }

    [Required]
    public string valorProduto { get; set; }

    public DateTime dataVenda { get; set; }

    public string quantidade { get; set; }

    public string valorTotal { get; set; }

    public int idFuncionario{ get; set; }
    public virtual Funcionario Funcionario { get; set; }
  }
}
