using System.Collections;
namespace FlyPal.Models.UtilityModels
{
    public class PagedResult<T>
    {
        public IEnumerable Items {get;set;}
        public int TotalSize {get;set;}
    }
}
