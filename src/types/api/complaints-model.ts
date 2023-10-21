/* tslint:disable */
export interface ComplaintsModel {
  complaintsCategoryId?: number;
  departureLocation?: null | string;
  finalDestination?: null | string;
  departureDate?: string;
  connectingFlights?: boolean;
  connectingFlightAirLine?: null | string;
  connectingFlightNumber?: null | string;
  boardingPass?: null | string;
  arrivalTime?: null | string;
  notificationPeriod?: null | string;
  delayedFlight?: null | string;
  airline?: null | string;
  flightNumber?: null | string;
  additionalInformation?: null | string;
  mandateFormReference?: null | string;
}
