using ASP.NETCoreWebApplication1.Data;
using ASP.NETCoreWebApplication1.Repository.IRepository;

namespace ASP.NETCoreWebApplication1.Repository;

public class UnitOfWork : IUnitOfWork
{
    private readonly ApplicationDbContext _db;
    public IGameModelRepository GameModel { get; private set; }
    //add models 
    public UnitOfWork(ApplicationDbContext db)
    {
        _db = db;
        GameModel = new GameModelRepository(_db);
        //add model here
    }

    

    public void Save()
    {
        _db.SaveChanges();
    }
}