using System;

namespace FlyPal.Models.InputModels
{
    public class ComplaintsModel
    {
        public int ComplaintsCategoryId { get; set; }
        public string DepartureLocation { get; set; }
        public string FinalDestination { get; set; }
        public DateTime DepartureDate { get; set; }
        public bool ConnectingFlights { get; set; }
        public string ConnectingFlightAirLine { get; set; }
        public string ConnectingFlightNumber { get; set; }
        public string BoardingPass { get; set; }
        public string ArrivalTime { get; set; }
        public string NotificationPeriod { get; set; }
        public string DelayedFlight { get; set; }
        public string Airline { get; set; }
        public string FlightNumber { get; set; }
        public string AdditionalInformation { get; set; }
        public string MandateFormReference { get; set; }
    }
}
