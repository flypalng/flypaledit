using System;
using System.Linq;
using FlyPal.DataContext;
using FlyPal.Models.AppModels;

namespace FlyPal.Models.SeederModels
{
    public class ComplainCategoriesSeeder
    {
        private readonly PMContext _context;

        public ComplainCategoriesSeeder(PMContext context)
        {
            _context = context;
        }

        public void SeedData()
        {
            CreateComplainCategory(new ComplaintsCategory { Name = "CANCELLED", DateCreated = DateTime.Now, DateModified = DateTime.Now });
            CreateComplainCategory(new ComplaintsCategory { Name = "DELAY", DateCreated = DateTime.Now, DateModified = DateTime.Now });
            CreateComplainCategory(new ComplaintsCategory { Name = "DENIED", DateCreated = DateTime.Now, DateModified = DateTime.Now });
            CreateComplainCategory(new ComplaintsCategory { Name = "BAGGAGE CLAIM", DateCreated = DateTime.Now, DateModified = DateTime.Now });
            CreateComplainCategory(new ComplaintsCategory { Name = "REFUND", DateCreated = DateTime.Now, DateModified = DateTime.Now });
        }

        private void CreateComplainCategory(ComplaintsCategory newCategory)
        {
            var existingType = _context.ComplaintsCategories.Where(p => p.Name == newCategory.Name).FirstOrDefault();
            if (existingType != null)
                return;

            _context.ComplaintsCategories.Add(newCategory);
            _context.SaveChanges();
        }
    }
}
