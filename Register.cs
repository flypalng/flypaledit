using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FlyPal.Models.InputModels
{
    public class Register
    {
        [Required(ErrorMessage = "An Email is required")]
        [EmailAddress(ErrorMessage = "Please enter a valid email address")]
        public string Email { get; set; }
        public string Password { get; set; }

        [Required(ErrorMessage = "You can not register without a firstname")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "You can not register without a Lastname")]
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
