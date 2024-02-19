using ASP.NETCoreWebApplication1.Data;
using ASP.NETCoreWebApplication1.Models;
using ASP.NETCoreWebApplication1.Repository.IRepository;

namespace ASP.NETCoreWebApplication1.Repository;

public class GameModelRepository : Repository<GameModel>, IGameModelRepository
{
    public GameModelRepository(ApplicationDbContext db) : base(db)
    {
    }
    
    
}