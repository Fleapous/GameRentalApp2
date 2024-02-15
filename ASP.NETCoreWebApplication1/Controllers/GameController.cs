using ASP.NETCoreWebApplication1.Data;
using ASP.NETCoreWebApplication1.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ASP.NETCoreWebApplication1.Controllers;

[ApiController]
[Route("[controller]")]
public class GameController : Controller
{
    private readonly ILogger<GameController> _logger;
    private readonly ApplicationDbContext _db;

    public GameController(ApplicationDbContext db, ILogger<GameController> logger)
    {
        _db = db ?? throw new ArgumentNullException(nameof(db));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
    }

    
    // GET
    [HttpGet]
    public IEnumerable<GameModel> GetGames()
    {
        _logger.LogInformation("GetGames action triggered.");
        IEnumerable<GameModel> games = _db.Set<GameModel>().ToList();
        return games;
    }
}