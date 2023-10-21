/* tslint:disable */
import { UserMetricsView } from './user-metrics-view';

export interface UserView {
  id?: number;
  email?: null | string;
  fullName?: null | string;
  firstName?: null | string;
  lastName?: null | string;
  token?: null | string;
  phoneNumber?: null | string;
  profilePhotoReference?: null | string;
  metrics?: UserMetricsView;
}
