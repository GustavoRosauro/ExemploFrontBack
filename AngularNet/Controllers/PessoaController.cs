using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularNet.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        [HttpPost]
        public Pessoa Salvar([FromBody] Pessoa pessoa)
        {
            return pessoa;
        }
        [HttpGet]
        public IActionResult HealthCheck()
        {
            return Ok("Running...");
        }
    }
}
