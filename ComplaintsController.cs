using System;
using System.Collections;
using System.Collections.Generic;
using Csv;
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
    [Authorize]
    public class ComplaintsController : ControllerBase
    {
        private readonly IComplaintsCategoryService _complaintsCategoryService;
        private readonly IComplaintsService _complaintsService;
        private readonly PagingOptions _defaultPagingOptions;

        public ComplaintsController(IComplaintsCategoryService complaintsCategoryService, IComplaintsService complaintsService, IOptions<PagingOptions> defaultPagingOptions)
        {
            _complaintsCategoryService = complaintsCategoryService;
            _complaintsService = complaintsService;
            _defaultPagingOptions = defaultPagingOptions.Value;
        }

        [HttpPost("create", Name = nameof(CreateComplaints))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<ComplaintsView>> CreateComplaints(ComplaintsModel model)
        {
            return Ok(_complaintsService.CreateComplaints(model));
        }

        [HttpGet("list/user", Name = nameof(ListMyComplaints))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<IEnumerable<ComplaintsView>>> ListMyComplaints([FromQuery] PagingOptions options)
        {
            options.Replace(_defaultPagingOptions);
            return Ok(_complaintsService.ListMyComplaints(options));
        }

        [HttpGet("list", Name = nameof(ListComplaints))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<PagedCollection<ComplaintsView>>> ListComplaints([FromQuery] PagingOptions options)
        {
            options.Replace(_defaultPagingOptions);
            return Ok(_complaintsService.ListComplaints(options));
        }

        [HttpGet("get/{complaintsId}", Name = nameof(GetComplaints))]
        public ActionResult<StandardResponse<ComplaintsView>> GetComplaints(int complaintsId)
        {
            return Ok(_complaintsService.GetComplaints(complaintsId));
        }

        [HttpPost("categories/create", Name = nameof(CreateCategory))]
        [ProducesResponseType(200)]
        public ActionResult<StandardResponse<ComplaintsCategory>> CreateCategory(NameModel model)
        {
            return Ok(_complaintsCategoryService.CreateCategory(model));
        }


        [HttpGet("categories/list", Name = nameof(ListCategories))]
        [AllowAnonymous]
        public ActionResult<StandardResponse<IEnumerable<ComplaintsCategory>>> ListCategories()
        {
            return Ok(_complaintsCategoryService.ListCategories());
        }

        [HttpGet("report/download", Name = nameof(GenerateReport))]
        [AllowAnonymous]
        public ActionResult<StandardResponse<IEnumerable<ComplaintsView>>> GenerateReport([FromQuery] DateTime startDate, [FromQuery] DateTime endDate)
        {
            var list = _complaintsService.GenerateReport(startDate, endDate).Data;
            var myExport = new CsvExport();
            myExport.AddRows(list);
            return File(myExport.ExportToBytes(), "text/csv", "report.csv");
        }

    }
}
