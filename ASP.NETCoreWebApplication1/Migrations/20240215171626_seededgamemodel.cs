using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASP.NETCoreWebApplication1.Migrations
{
    /// <inheritdoc />
    public partial class seededgamemodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "GameModels",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "BackGroundImg", "Name" },
                values: new object[] { "CastleBackground.jpg", "Mario Wonder" });

            migrationBuilder.UpdateData(
                table: "GameModels",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "BackGroundImg", "Name" },
                values: new object[] { "AnimalCrossingBack.jpg", "Animal Crossing" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "GameModels",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "BackGroundImg", "Name" },
                values: new object[] { null, "Mario" });

            migrationBuilder.UpdateData(
                table: "GameModels",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "BackGroundImg", "Name" },
                values: new object[] { null, "Mario2" });
        }
    }
}
