using System;
using System.Collections.Generic;
using System.Linq;
using FlyPal.DataContext;
using FlyPal.Models.AppModels;
using FlyPal.Repositories.Interfaces;
using FlyPal.Utilities;
using Microsoft.EntityFrameworkCore;

namespace FlyPal.Repositories
{
    public class ComplaintsRepository : BaseRepository<Complaints>, IComplaintsRepository
    {
        public ComplaintsRepository(PMContext context) : base(context)
        {
        }

        public IEnumerable<Complaints> ListComplaints()
        {
            try
            {
                var complaints = _context.Complaints.Include(c => c.User).Include(c => c.Status).Include(c => c.ComplaintsCategory).ToList();
                return complaints;
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return null;
            }
        }

        public (int resolved, int declined, int pending) GetStats()
        {
            try
            {
                var resolved = _context.Complaints.Where(c => c.StatusId == (int)Statuses.RESOLVED).Count();
                var declined = _context.Complaints.Where(c => c.StatusId == (int)Statuses.DECLINED).Count();
                var pending = _context.Complaints.Where(c => c.StatusId == (int)Statuses.PENDING).Count();
                return (resolved, declined, pending);
            }
            catch (Exception ex)
            {
                Logger.Error(ex);
                return (0, 0, 0);
            }
        }
    }
}
