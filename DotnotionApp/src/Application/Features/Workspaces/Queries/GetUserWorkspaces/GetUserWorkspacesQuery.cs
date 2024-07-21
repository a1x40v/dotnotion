using Application.Common.Interfaces;
using Application.Common.Security;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Features.Workspaces.Queries.GetUserWorkspaces;

[Authorize]
public class GetUserWorkspacesQuery : IRequest<ICollection<WorkspaceDto>>
{
}

public class GetWorkspacesQueryHander(
    IUserAccessor userAccessor,
    IAppDbContext dbContext,
    IMapper mapper
) : IRequestHandler<GetUserWorkspacesQuery, ICollection<WorkspaceDto>>
{
    public async Task<ICollection<WorkspaceDto>> Handle(GetUserWorkspacesQuery request, CancellationToken cancellationToken)
    {
        Guid userId = Guid.Parse(userAccessor.GetCurrentUserId()!);

        return await dbContext.Workspaces
            .Where(x => x.OwnerId == userId)
            .ProjectTo<WorkspaceDto>(mapper.ConfigurationProvider)
            .ToListAsync(cancellationToken: cancellationToken);
    }
}
