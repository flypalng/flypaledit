namespace FlyPal.Models.ViewModels
{
    public class DashboardMetricsView
    {
        public int Users  { get; set;}
        public int NewUsers { get; set;}
        public int ResolvedComplaints { get; set;}
        public int PendingComplaints { get; set;}
        public int DeclinedComplaints { get; set;}
    }
}
