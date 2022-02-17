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
  public class VendaController : ControllerBase
  {
    private readonly AplicationDBContext _context;

    public VendaController(AplicationDBContext context)
    {
      _context = context;
    }

    // GET: api/<ManutencaoController>
    [HttpGet("")]
    public async Task<ActionResult> Get()
    {
      try
      {
        var listClient = await _context.Venda.ToListAsync();
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
    public async Task<ActionResult> Post([FromBody] Venda venda)
    {
      try
      {
        _context.Add(venda);
        await _context.SaveChangesAsync();
        return Ok(venda);
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
