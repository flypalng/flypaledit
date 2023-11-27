using System.Collections.Generic;
using System.Linq;
using FlyPal.Models.AppModels;

namespace FlyPal.Repositories.Interfaces
{
    public interface IComplaintsRepository
    {
         Complaints CreateAndReturn(Complaints model);
         Complaints Update(Complaints model);
         IEnumerable<Complaints> ListComplaints();
         (int resolved, int declined, int pending) GetStats();
         IQueryable<Complaints> Query()
;    }
}
