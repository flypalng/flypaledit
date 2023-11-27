using System.Collections;
using System.Collections.Generic;
using FlyPal.Models.AppModels;
using FlyPal.Models.InputModels;
using FlyPal.Utilities;

namespace FlyPal.Services.Interfaces
{
    public interface IComplaintsCategoryService
    {
         StandardResponse<ComplaintsCategory> CreateCategory(NameModel model);
         StandardResponse<IEnumerable<ComplaintsCategory>> ListCategories();
    }
}
