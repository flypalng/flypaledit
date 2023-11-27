using System;

namespace FlyPal.Models.ViewModels
{
    public class ComplaintsView
    {
        public int Id { get; set; }
        public UserView User { get; set; }
        public string ComplaintsCategory { get; set; }
        public string Status { get; set; }
        public string DepartureLocation { get; set; }
        public string FinalDestination { get; set; }
        public DateTime DepartureDate { get; set; }
        public bool ConnectingFlights { get; set; }
        public string ArrivalTime { get; set; }
        public string NotificationPeriod { get; set; }
        public string DelayedFlight { get; set; }
        public string Airline { get; set; }
        public string FlightNumber { get; set; }
        public string AdditionalInformation { get; set; }
        public string MandateFormReference { get; set; }
        public string ReferenceCode { get; set; }
    }
}
