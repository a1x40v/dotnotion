using Application.Features.Accounts.Commands.CreateUser;
using Application.Features.Accounts.Commands.LoginUser;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

public class AccountsController : ApiControllerBase
{
    [HttpPost("signup")]
    public async Task<IActionResult> Register(CreateUserCommand command)
    {
        var authResult = await Mediator.Send(command);

        return Ok(authResult);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginUserCommand command)
    {
        var authResult = await Mediator.Send(command);

        return Ok(authResult);
    }
}
