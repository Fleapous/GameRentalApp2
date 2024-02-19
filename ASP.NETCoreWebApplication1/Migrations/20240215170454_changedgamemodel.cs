using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASP.NETCoreWebApplication1.Migrations
{
    /// <inheritdoc />
    public partial class changedgamemodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "BackGroundImg",
                table: "GameModels",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "GameModels",
                keyColumn: "Id",
                keyValue: 1,
                column: "BackGroundImg",
                value: null);

            migrationBuilder.UpdateData(
                table: "GameModels",
                keyColumn: "Id",
                keyValue: 2,
                column: "BackGroundImg",
                value: null);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BackGroundImg",
                table: "GameModels");
        }
    }
}
