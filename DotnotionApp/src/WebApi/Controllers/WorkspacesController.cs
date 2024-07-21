using Application.Features.Workspaces.Queries.GetUserWorkspaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers;

public class WorkspacesController : ApiControllerBase
{
    [HttpGet]
    public async Task<ActionResult> GetUserWorkspaces()
    {
        return Ok(await Mediator.Send(new GetUserWorkspacesQuery()));
    }
}
