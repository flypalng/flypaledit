namespace FlyPal.Models.InputModels
{
    public class UpdateUserModel
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public string ProfilePhotoReference { get; set; }
        public MediaModel ProfilePicture { get; set; }
    }
}
