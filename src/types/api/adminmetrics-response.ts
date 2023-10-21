/* tslint:disable */
import { DashboardMetricsViewStandardResponse } from './dashboard-metrics-view-standard-response';

export type AdminmetricsResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? DashboardMetricsViewStandardResponse
    : TContentType extends 'application/json'
    ? DashboardMetricsViewStandardResponse
    : TContentType extends 'text/json'
    ? DashboardMetricsViewStandardResponse
    : any
  : any;
