using FlyPal.DataContext;

namespace FlyPal.Models.SeederModels
{
    public class SeedData
    {
        private readonly PMContext _context;

        public SeedData(PMContext context)
        {
            _context = context;
        }

        public void SeedInitialData()
        {
            new StatusSeeder(_context).SeedData();
            new ComplainCategoriesSeeder(_context).SeedData();
        }
    }
}
