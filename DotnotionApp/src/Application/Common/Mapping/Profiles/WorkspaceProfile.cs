using Application.Features.Workspaces.Queries.GetUserWorkspaces;
using AutoMapper;
using Domain.Entities;

namespace Application.Common.Mapping.Profiles;

public class WorkspaceProfile : Profile
{
    public WorkspaceProfile()
    {
        CreateMap<Workspace, WorkspaceDto>();
    }
}
