using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Interface;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static class ApplicationServicesExtension
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection service, IConfiguration config)
        {
                service.AddDbContext<DataContext>( opt =>
                {
                    opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
                });
                service.AddCors();
                service.AddScoped<ITokenService,TokenService>();
                return service;
        }
    }
}