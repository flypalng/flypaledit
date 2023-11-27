using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlyPal.Models.AppModels
{
    public class BaseModel
    {
        public int Id { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.Now;

        public DateTime DateModified { get; set; } = DateTime.Now;
    }
}
