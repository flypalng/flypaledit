using System.Collections.Generic;
using System.Threading.Tasks;
using FlyPal.Models.AppModels;

namespace FlyPal.Repositories.Interfaces
{
    public interface IMediaRepository 
    {
         Task<(bool Succeeded, Media UploadedMedia)> UploadMedia(Media media);
         List<Media> UploadBulkMedia(List<Media> medias);
         void Delete(Media media);
         IEnumerable<Media> List();
    }
}
