using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using FlyPal.Utilities.Constants;

namespace FlyPal.Models.AppModels
{
    public class Media : BaseModel
    {
        [Required]
        [MaxLength(ModelConstants.MAX_LENGTH_60)]

        public string Name { get; set; }
        [Required]
        [MaxLength(ModelConstants.MAX_LENGTH_60)]
        public string Extention { get; set; }
        [Required]
        [MaxLength(ModelConstants.MAX_LENGTH_MAX)]
        public string Url { get; set; }
        [NotMapped]
        public string Base64String { get; set; }
        public bool IsImage { get; set; }
        public bool IsVideo { get; set; }
        public bool IsDocument { get; set; }
    }
}
