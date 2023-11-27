using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlyPal.Models.AppModels;
using FlyPal.Models.InputModels;
using FlyPal.Models.UtilityModels;
using FlyPal.Models.ViewModels;
using FlyPal.Services;
using FlyPal.Services.Interfaces;
using FlyPal.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace FlyPal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly PagingOptions _defaultPagingOptions;

        public UserController(IUserService userService, IOptions<PagingOptions> defaultPagingOptions)
        {
            _userService = userService;
            _defaultPagingOptions = defaultPagingOptions.Value;
        }

        [HttpPost("register", Name = nameof(Register))]
        [ProducesResponseType(200)]
        public ActionResult Register(Register newUser)
        {
            return Ok(_userService.CreateUser(newUser));
        }

        [HttpPost("token", Name = nameof(Login))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> Login(LoginModel user)
        {
            return Ok(_userService.Authenticate(user));
        }

        [HttpGet("verifyUser/{token}/{email}", Name = nameof(Verify))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> Verify(string token, string email)
        {
            return Ok(_userService.VerifyUser(token, email));
        }

        [HttpGet("delete/{email}", Name = nameof(Delete))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> Delete(string email)
        {
            return Ok(_userService.DeleteUser(email));
        }

        [HttpGet("reset/initiate/{email}", Name = nameof(InitiateReset))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> InitiateReset(string email)
        {
            return Ok(_userService.InitiatePasswordReset(email));
        }

        [HttpPost("reset/complete", Name = nameof(CompleteReset))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> CompleteReset(PasswordReset payload)
        {
            return Ok(_userService.CompletePasswordReset(payload));
        }

        [HttpGet("list", Name = nameof(ListUsers))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<PagedCollection<UserView>>> ListUsers([FromQuery] PagingOptions pagingOptions = null)
        {
            pagingOptions.Replace(_defaultPagingOptions);
            return Ok(_userService.ListUsers(pagingOptions));
        }

         [HttpGet("search/{search}", Name = nameof(SearchUsers))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<IEnumerable<UserView>>> SearchUsers(string search)
        {
            return Ok(_userService.SearchUsers(search));
        }

        [HttpGet("getbyid", Name = nameof(GetUser))]
        [Authorize]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<PagedCollection<UserView>>> GetUser()
        {
            return Ok(_userService.GetUserById());
        }


        [HttpPut("update", Name = nameof(UpdateUser))]
        [Authorize]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> UpdateUser(UpdateUserModel model)
        {
            return Ok(_userService.UpdateUser(model));
        }

        [HttpPost("password/update", Name = nameof(UpdatePassword))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> UpdatePassword(PasswordResetModel model)
        {
            return Ok(_userService.ResetPassword(model));
        }


        // [HttpGet("enquiries", Name = nameof(ListAllEnquiries))]
        // [ProducesResponseType(200)]
        // public ActionResult<StandardResponse<PagedCollection<UserEnquiry>>> ListAllEnquiries([FromQuery] PagingOptions pagingOptions = null)
        // {
        //     pagingOptions.Replace(_defaultPagingOptions);
        //     return Ok(_userService.ListAllEnquiries(pagingOptions));
        // }
    }
}
