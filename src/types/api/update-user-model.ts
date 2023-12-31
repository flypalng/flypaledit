/* tslint:disable */
import { MediaModel } from './media-model';

export interface UpdateUserModel {
  id?: number;
  phoneNumber?: null | string;
  profilePhotoReference?: null | string;
  profilePicture?: MediaModel;
}
