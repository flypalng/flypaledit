using System.Collections.Generic;
using FlyPal.Models.AppModels;

namespace FlyPal.Repositories.Interfaces
{
    public interface IComplaintsCategoryRepository
    {
         ComplaintsCategory CreateAndReturn(ComplaintsCategory model);
         IEnumerable<ComplaintsCategory> ListCategories();
    }
}
