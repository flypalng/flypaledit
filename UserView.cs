using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlyPal.Models.ViewModels
{
    public class UserView
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Token { get; set; }
        public string PhoneNumber { get; set; }
        public string ProfilePhotoReference { get; set; }
        public UserMetricsView Metrics { get; set; }

    }
}
