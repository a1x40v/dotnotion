namespace Domain.Entities;

public class DomainUser
{
    public Guid Id { get; set; }
    public string UserName { get; set; } = null!;
    public string? FullName { get; set; }
    public string? AvatarUrl { get; set; }
    public ICollection<Workspace> Workspaces { get; set; } = [];
}
