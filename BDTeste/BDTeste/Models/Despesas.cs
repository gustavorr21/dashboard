using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Models
{
  public class Despesas
  {
    public int Id { get; set; }

    public string codigoProduto { get; set; }

    public string nomeProduto { get; set; }

    public double valorProduto { get; set; }

    public string quantidade { get; set; }

    public DateTime dataCompra { get; set; }

    public double valorTotal { get; set; }

    public int idProduto { get; set; }
    public virtual Produto Produto { get; set; }
  }
}
