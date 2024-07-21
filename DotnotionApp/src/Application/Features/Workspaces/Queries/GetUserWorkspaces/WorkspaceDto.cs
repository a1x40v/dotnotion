namespace Application.Features.Workspaces.Queries.GetUserWorkspaces;

public class WorkspaceDto
{
    public Guid Id { get; set; }
    public string Title { get; set; } = null!;
    public string IconId { get; set; } = null!;
    public string? BannerUrl { get; set; }
}
