using System.Text;
using Application.Common.Interfaces;
using Infrastructure.Identity;
using Infrastructure.Identity.Services;
using Infrastructure.Options;
using Infrastructure.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Microsoft.Extensions.DependencyInjection;

public static class ConfigureServices
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        // bind jwt options
        var jwtOptions = new JwtOptions();
        configuration.GetSection("Jwt").Bind(jwtOptions);

        if (string.IsNullOrEmpty(jwtOptions.Issuer) ||
            string.IsNullOrEmpty(jwtOptions.Audience) ||
            string.IsNullOrEmpty(jwtOptions.Key))
        {
            throw new InvalidOperationException("JWT configuration is invalid.");
        }

        services.Configure<JwtOptions>(configuration.GetSection("Jwt"));

        // add services
        services.AddScoped<IAppDbContext, AppDbContext>();
        services.AddSingleton<JwtService, JwtService>();
        services.AddScoped<IIdentityService, IdentityService>();

        services.AddDbContext<AppDbContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

        services.AddIdentityCore<ApplicationUser>()
            .AddEntityFrameworkStores<AppDbContext>()
            .AddDefaultTokenProviders();

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtOptions.Key));
        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtOptions.Issuer,
                    ValidAudience = jwtOptions.Audience,
                    IssuerSigningKey = key
                };
            });

        return services;
    }
}
