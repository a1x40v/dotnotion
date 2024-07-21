using Application.Common.Interfaces;
using Application.Common.Security;
using Domain.Entities;
using MediatR;

namespace Application.Features.Accounts.Commands.CreateUser;

public class CreateUserCommand : IRequest<AuthResult>
{
    public string? Email { get; set; } = null!;
    public string? Password { get; set; } = null!;
}

public class CreateUserCommandHandler(
    IIdentityService identityService,
    IAppDbContext dbContext
) : IRequestHandler<CreateUserCommand, AuthResult>
{
    public async Task<AuthResult> Handle(CreateUserCommand command, CancellationToken cancellationToken)
    {
        var authResult = await identityService.CreateUserAsync(email: command.Email!, password: command.Password!);

        var domainUser = new DomainUser
        {
            Id = Guid.Parse(authResult.UserId),
            UserName = command.Email!
        };

        dbContext.DomainUsers.Add(domainUser);

        await dbContext.SaveChangesAsync(cancellationToken);

        return authResult;
    }
}