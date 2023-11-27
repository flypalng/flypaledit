using System;

namespace FlyPal.Models.AppModels
{
    public class Complaints : BaseModel
    {
        public string Comment { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public int StatusId { get; set; }
        public Status Status { get; set; }
        public string DepartureLocation { get; set; }
        public string FinalDestination { get; set; }
        public DateTime DepartureDate { get; set; }
        public bool ConnectingFlights { get; set; }
        public string ConnectingFlightAirLine { get; set; }
        public string ConnectingFlightNumber { get; set; }
        public string BoardingPass { get; set; }
        public string ArrivalTime { get; set; }
        public string NotificationPeriod { get; set; }
        public int ComplaintsCategoryId { get; set; }
        public ComplaintsCategory ComplaintsCategory { get; set;}
        public string DelayedFlight { get; set; }
        public string Airline { get; set; }
        public string FlightNumber { get; set; }
        public string AdditionalInformation { get; set; }
        public string MandateFormReference { get; set; }
        public string ReferenceCode { get; set; }
    }
}
