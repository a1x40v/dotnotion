using Application.Common.Security;

namespace Application.Common.Interfaces;

public interface IIdentityService
{
    Task<bool> AuthorizeAsync(string userId, string policyName);
    Task<AuthResult> Login(string email, string password);
    Task<AuthResult> CreateUserAsync(string email, string password);
}
