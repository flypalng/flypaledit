using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using FlyPal.Models.AppModels;
using FlyPal.Utilities.Constants;

namespace FlyPal.Models
{
    public class User : IdentityUser<int>
    {
        [Required]
        [MaxLength(ModelConstants.MAX_LENGTH_60)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(ModelConstants.MAX_LENGTH_60)]
        public  string LastName { get; set; }
        [Required]
        [MaxLength(ModelConstants.MAX_LENGTH_60)]
        public string Password { get; set; }
        [NotMapped]
        public string Token { get; set; }
        public string CompanyName {get;set;}
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public IEnumerable<Code> Codes { get; set; }
        public string MiddleName { get; set; }
        public string Address { get; set; }
        public string ProfilePhotoReference { get; set; }
        public bool IsAdmin { get; set; }
        public IEnumerable<Complaints> Complaints { get; set; }
    }
}
