using System.Collections.Generic;
using FlyPal.Models.AppModels;
using FlyPal.Models.InputModels;
using FlyPal.Models.UtilityModels;
using FlyPal.Models.ViewModels;
using FlyPal.Services.Interfaces;
using FlyPal.Utilities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace FlyPal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "ADMIN")]
    public class AdminController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly PagingOptions _defaultPagingOptions;
        private readonly IComplaintsService _complaintsService;

        public AdminController(IUserService userService, IOptions<PagingOptions> defaultPagingOptions, IComplaintsService complaintsService)
        {
            _userService = userService;
            _defaultPagingOptions = defaultPagingOptions.Value;
            _complaintsService = complaintsService;
        }

        [HttpPost("token", Name = nameof(Authenticate))]
        [ProducesResponseType(200)]
        [AllowAnonymous]
        public ActionResult<StandardResponse<UserView>> Authenticate(LoginModel userToLogin)
        {
            return Ok(_userService.AuthenticateAdmin(userToLogin));
        }

        [HttpPost("create", Name = nameof(Create))]
        [ProducesResponseType(200)]
        [AllowAnonymous]
        public ActionResult<StandardResponse<UserView>> Create(Register newUser)
        {
            return Ok(_userService.CreateAdminUser(newUser));
        }

        [HttpGet("list", Name = nameof(ListAdmins))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<PagedCollection<UserView>>> ListAdmins([FromQuery] PagingOptions pagingOptions = null, [FromQuery] string search = null)
        {
            pagingOptions.Replace(_defaultPagingOptions);
            return Ok(_userService.ListAllAdminUsers(pagingOptions, search));
        }

        [HttpGet("metrics", Name = nameof(Metrics))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<DashboardMetricsView>> Metrics()
        {
            return Ok(_userService.GetMetrics());
        }

        [HttpGet("delete/{email}", Name = nameof(DeleteUser))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<UserView>> DeleteUser(string email)
        {
            return Ok(_userService.DeleteUser(email));
        }

        [HttpGet("complaints/decline/{id}", Name = nameof(DeclineComplain))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<ComplaintsView>> DeclineComplain(int id)
        {
            return Ok(_complaintsService.DeclinedComplaints(id));
        }

        [HttpGet("complaints/resolve/{id}", Name = nameof(ResolveComplain))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<ComplaintsView>> ResolveComplain(int id)
        {
            return Ok(_complaintsService.ResolvedComplaints(id));
        }
        [HttpGet("complain/list/user/{userId}", Name = nameof(ListUserComplaints))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<PagedCollection<ComplaintsView>>> ListUserComplaints([FromQuery] PagingOptions options, int userId = 0)
        {
            options.Replace(_defaultPagingOptions);
            return Ok(_complaintsService.ListMyComplaints(options, userId));
        }

        [HttpGet("user/get/{id}", Name = nameof(GetUserById))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<PagedCollection<UserView>>> GetUserById(int id)
        {
            return Ok(_userService.GetUserById(id));
        }

        [HttpGet("chart/users", Name = nameof(GetUsersCharts))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<IEnumerable<MonthlyUserView>>> GetUsersCharts()
        {
            return Ok(_userService.GetMonthlyUsers());
        }

        [HttpGet("chart/complaints/pending", Name = nameof(GetPendingComplaitsCharts))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<IEnumerable<DailyComplaintCount>>> GetPendingComplaitsCharts()
        {
            return Ok(_complaintsService.GetDailyCountsPending());
        }

        [HttpGet("chart/complaints/resolved", Name = nameof(GetResolvedComplaitsCharts))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<IEnumerable<DailyComplaintCount>>> GetResolvedComplaitsCharts()
        {
            return Ok(_complaintsService.GetDailyCountsResolved());
        }
    }
}
