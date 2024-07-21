namespace Application.Common.Security;

public class AuthResult
{
    public string UserId { get; set; } = null!;
    public string JwtToken { get; set; } = null!;
}
