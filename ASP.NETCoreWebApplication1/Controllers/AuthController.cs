using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplication1.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthController : Controller
{
    private readonly ILogger<AuthController> _logger;
    private readonly UserManager<IdentityUser> _userManager;

    public AuthController(ILogger<AuthController> logger, UserManager<IdentityUser> userManager)
    {
        _logger = logger;
        _userManager = userManager;
    }
    
    // GET
    public async Task<IActionResult> PingAuth()
    {
        if (!User.Identity.IsAuthenticated)
        {
            // If the user is not authenticated, return a 401 Unauthorized response
            return Unauthorized(new { error = "Unauthorized. Please sign in to access this resource." });
        }
        
        var email = User.FindFirstValue(ClaimTypes.Email);
        if (email == null)
            return NotFound(new { error = "email does not exists" });
        
        // Find the user by email
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null)
            return NotFound(new { error = "User not found." });
        
        
        var roles = await _userManager.GetRolesAsync(user);
        return Ok(new { Email = email, Roles = roles });
    }
}