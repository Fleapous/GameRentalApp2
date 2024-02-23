using ASP.NETCoreWebApplication1.Data;
using ASP.NETCoreWebApplication1.Models;
using ASP.NETCoreWebApplication1.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
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
    private IUnitOfWork _unitOf;

    public GameController(ApplicationDbContext db, ILogger<GameController> logger, IUnitOfWork unitOf)
    {
        _db = db ?? throw new ArgumentNullException(nameof(db));
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _unitOf = unitOf;
    }

    
    // GET
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<GameModel>))]
    public IEnumerable<GameModel> GetGames()
    {
        _logger.LogInformation("GetGames action triggered.");
        IEnumerable<GameModel> games = _unitOf.GameModel.GetAll();
        return games;
    }
}