/* tslint:disable */
import { UserViewIEnumerableStandardResponse } from './user-view-i-enumerable-standard-response';

export type UsersearchSearchResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? UserViewIEnumerableStandardResponse
    : TContentType extends 'application/json'
    ? UserViewIEnumerableStandardResponse
    : TContentType extends 'text/json'
    ? UserViewIEnumerableStandardResponse
    : any
  : any;
