using System.Security.Claims;
using Application.Common.Interfaces;

namespace WebApi.Services;

public class UserAccessor(IHttpContextAccessor httpContextAccessor) : IUserAccessor
{
    public string? GetCurrentUserId()
    {
        return httpContextAccessor.HttpContext!.User.FindFirstValue(ClaimTypes.NameIdentifier);
    }
}
