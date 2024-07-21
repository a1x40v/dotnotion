using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Persistence.Configuration;

public class WorkspaceConfiguration : IEntityTypeConfiguration<Workspace>
{
    public void Configure(EntityTypeBuilder<Workspace> builder)
    {
        builder.ToTable("Workspaces");

        builder.Property(w => w.Title)
            .HasMaxLength(255)
            .IsRequired();

        builder.Property(w => w.IconId)
            .HasMaxLength(64)
            .IsRequired();

        builder.HasOne(w => w.Owner)
            .WithMany(u => u.Workspaces)
            .HasForeignKey(w => w.OwnerId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
