using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Application.Common.Interfaces;

public interface IAppDbContext
{
    DbSet<Workspace> Workspaces { get; }
    DbSet<DomainUser> DomainUsers { get; }
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
