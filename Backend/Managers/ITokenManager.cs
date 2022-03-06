using MyProject.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyProject.Managers
{
    public interface ITokenManager
    {
        Task<string> CreateToken(User user);
    }
}
