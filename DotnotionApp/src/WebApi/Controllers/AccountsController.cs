using Application.Features.Accounts.Commands.CreateUser;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

public class AccountsController : ApiControllerBase
{
    [HttpPost("register")]
    public async Task<IActionResult> Register(CreateUserCommand command)
    {
        var authResult = await Mediator.Send(command);

        return Ok(authResult);
    }
}
