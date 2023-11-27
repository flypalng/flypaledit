using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlyPal.Models.InputModels
{
    public class PasswordReset
    {
        public string Code { get; set; }
        public string NewPassword { get; set; }
    }
}
