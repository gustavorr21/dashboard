using BDTeste.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BDTeste.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ClienteController : ControllerBase
  {
    private readonly AplicationDBContext _context;

    public ClienteController(AplicationDBContext context)
    {
      _context = context;
    }
    // GET: api/<ManutencaoController>
    [HttpGet("")]
    public async Task<ActionResult> Get()
    {
      try
      {
        var listClient = await _context.Clientes.ToListAsync();
        return Ok(listClient);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // GET api/<ManutencaoController>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
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
