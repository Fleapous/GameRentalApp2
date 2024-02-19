using ASP.NETCoreWebApplication1.Models;

namespace ASP.NETCoreWebApplication1.Repository.IRepository;

public interface IUnitOfWork
{
    //add models here
    public IGameModelRepository GameModel { get; }
    void Save();
}