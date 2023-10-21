/* tslint:disable */
import { DashboardMetricsView } from './dashboard-metrics-view';

export interface DashboardMetricsViewStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: DashboardMetricsView;
  statusCode?: null | string;
  errors?: any;
}
