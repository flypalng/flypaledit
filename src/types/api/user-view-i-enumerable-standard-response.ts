/* tslint:disable */
import { UserView } from './user-view';

export interface UserViewIEnumerableStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: null | Array<UserView>;
  statusCode?: null | string;
  errors?: any;
}
