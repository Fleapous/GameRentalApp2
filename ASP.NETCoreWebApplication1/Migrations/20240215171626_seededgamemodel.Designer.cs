﻿// <auto-generated />
using ASP.NETCoreWebApplication1.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ASP.NETCoreWebApplication1.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20240215171626_seededgamemodel")]
    partial class seededgamemodel
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.16")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("ASP.NETCoreWebApplication1.Models.GameModel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("BackGroundImg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("GameModels");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            BackGroundImg = "CastleBackground.jpg",
                            Name = "Mario Wonder"
                        },
                        new
                        {
                            Id = 2,
                            BackGroundImg = "AnimalCrossingBack.jpg",
                            Name = "Animal Crossing"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
