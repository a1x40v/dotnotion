namespace Domain.Entities;

public class Workspace
{
    public Guid Id { get; set; }
    public string Title { get; set; } = null!;
    public string IconId { get; set; } = null!;
    public string? BannerUrl { get; set; }
    public Guid OwnerId { get; set; }
    public DomainUser Owner { get; set; } = null!;
}
