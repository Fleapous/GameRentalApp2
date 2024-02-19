using System.ComponentModel.DataAnnotations;

namespace ASP.NETCoreWebApplication1.Models;

public class GameModel
{
    [Key]
    public int Id {get; set; }
    public string Name { get; set; } = null!;
    public string? BackGroundImg { get; set; }
}