using System;

namespace src {
    public class LoginRequest {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class LoginResponse {
        private LoginRequest request;

        public LoginResponse(LoginRequest req) {
            request=req;
        }

        public bool valid() {
            //this will be changed in the future
            return (
                request.Password=="password" &&
                request.Username=="admin"
            );
        }
    }
}
