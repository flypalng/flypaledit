using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using FlyPal.DataContext;
using FlyPal.Models.AppModels;
using FlyPal.Repositories.Interfaces;
using FlyPal.Utilities;

namespace FlyPal.Repositories
{
    public class ComplaintsCategoryRepository : BaseRepository<ComplaintsCategory>,  IComplaintsCategoryRepository
    {
        public ComplaintsCategoryRepository(PMContext context) : base(context)
        {
        }

        

        public IEnumerable<ComplaintsCategory> ListCategories()
        {
            try
            {
                var categories = _context.ComplaintsCategories;
                return categories;
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return null;
            }
        }
    }
}
