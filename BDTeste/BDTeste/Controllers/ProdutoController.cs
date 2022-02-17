using BDTeste.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BDTeste.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProdutoController : ControllerBase
  {
    private readonly AplicationDBContext _context;

    public ProdutoController(AplicationDBContext context)
    {
      _context = context;
    }

    // GET: api/<ManutencaoController>
    [HttpGet("")]
    public async Task<ActionResult> Get()
    {
      try
      {
        var listClient = await _context.Produto.ToListAsync();
        return Ok(listClient);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // GET api/<ManutencaoController>/5
    [HttpGet("{codigoProduto}")]
    public async Task<ActionResult> Get(int codigoProduto)
    {
      try
      {
        var listProdutoCodigo= _context.Produto.FirstOrDefault(x=>x.codigoProduto == codigoProduto.ToString());
        return Ok(listProdutoCodigo);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // POST api/<ManutencaoController>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] Produto produto)
    {
      try
      {
        _context.Add(produto);
        await _context.SaveChangesAsync();
        return Ok(produto);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // PUT api/<ManutencaoController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<ManutencaoController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
