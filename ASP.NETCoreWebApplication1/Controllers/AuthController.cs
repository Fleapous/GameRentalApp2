using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplication1.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : Controller
{
    private readonly ILogger<AuthController> _logger;

    public AuthController(ILogger<AuthController> logger)
    {
        _logger = logger;
    }
    
    // GET
    public IActionResult PingAuth()
    {
        if (!User.Identity.IsAuthenticated)
        {
            // If the user is not authenticated, return a 401 Unauthorized response
            return Unauthorized(new { error = "Unauthorized. Please sign in to access this resource." });
        }

        var email = User.FindFirstValue(ClaimTypes.Email);
        return Ok(new { Email = email });
    }
}