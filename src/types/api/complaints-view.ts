/* tslint:disable */
import { UserView } from './user-view';

export interface ComplaintsView {
  id?: number;
  user?: UserView;
  complaintsCategory?: null | string;
  status?: null | string;
  departureLocation?: null | string;
  finalDestination?: null | string;
  departureDate?: string;
  connectingFlights?: boolean;
  arrivalTime?: null | string;
  notificationPeriod?: null | string;
  delayedFlight?: null | string;
  airline?: null | string;
  flightNumber?: null | string;
  additionalInformation?: null | string;
  mandateFormReference?: null | string;
}
