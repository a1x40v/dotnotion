using Application.Common.Interfaces;
using Application.Common.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Identity.Services;

public class IdentityService(
    UserManager<ApplicationUser> userManager,
    IUserClaimsPrincipalFactory<ApplicationUser> userClaimsPrincipalFactory,
    IAuthorizationService authorizationService,
    JwtService jwtService
) : IIdentityService
{
    private AuthResult CreateAuthResult(ApplicationUser user)
    {
        return new AuthResult
        {
            UserId = user.Id,
            JwtToken = jwtService.CreateToken(user.Id)
        };
    }

    public async Task<bool> AuthorizeAsync(string userId, string policyName)
    {
        var user = userManager.Users.SingleOrDefault(u => u.Id == userId.ToString());

        if (user == null)
        {
            return false;
        }

        var principal = await userClaimsPrincipalFactory.CreateAsync(user);

        var result = await authorizationService.AuthorizeAsync(principal, policyName);

        return result.Succeeded;
    }

    public async Task<AuthResult> CreateUserAsync(string email, string password)
    {
        if (await userManager.Users.AnyAsync(x => x.Email == email))
        {
            throw new Exception("Email is taken");
        }

        var appUser = new ApplicationUser
        {
            Email = email,
            UserName = email
        };

        var result = await userManager.CreateAsync(appUser, password);

        if (!result.Succeeded)
        {
            throw new Exception("Failed to register the user");
        }

        return CreateAuthResult(appUser);
    }

    public async Task<AuthResult> Login(string email, string password)
    {
        var user = await userManager.Users.FirstOrDefaultAsync(x => x.Email == email);

        if (user == null)
        {
            throw new Exception("Wrong email or password.");
        }

        var result = await userManager.CheckPasswordAsync(user, password);

        if (!result)
        {
            throw new Exception("Wrong email or password.");
        }

        return CreateAuthResult(user);
    }
}
