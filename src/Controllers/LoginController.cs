using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace src.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class LoginRequestController : ControllerBase {
        private readonly ILogger<LoginRequestController> _logger;

        public LoginRequestController(ILogger<LoginRequestController> logger) {
            _logger = logger;
        }

        [HttpPost]
        public bool Get(LoginRequest req) {
            return new LoginResponse(req).valid();
        }
    }
}