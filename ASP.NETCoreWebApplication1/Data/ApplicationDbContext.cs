using ASP.NETCoreWebApplication1.Models;
using Microsoft.EntityFrameworkCore;

namespace ASP.NETCoreWebApplication1.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    private DbSet<GameModel> GameModels { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<GameModel>().HasData
        (
            new GameModel {Id = 1, Name = "Mario Wonder", BackGroundImg = "CastleBackground.jpg"},
            new GameModel {Id = 2, Name = "Animal Crossing", BackGroundImg = "AnimalCrossingBack.jpg"}
        );
    }
}