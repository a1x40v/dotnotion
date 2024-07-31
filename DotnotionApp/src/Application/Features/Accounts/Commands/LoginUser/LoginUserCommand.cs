using Application.Common.Interfaces;
using Application.Common.Security;
using MediatR;

namespace Application.Features.Accounts.Commands.LoginUser;

public class LoginUserCommand : IRequest<AuthResult>
{
    public string? Email { get; set; } = null!;
    public string? Password { get; set; } = null!;
}

public class LoginUserCommandHandler(
    IIdentityService identityService
) : IRequestHandler<LoginUserCommand, AuthResult>
{
    public async Task<AuthResult> Handle(LoginUserCommand command, CancellationToken cancellationToken)
    {
        var authResult = await identityService.Login(command.Email!, command.Password!);

        return authResult;
    }
}
