/* tslint:disable */
import { MonthlyUserViewIEnumerableStandardResponse } from './monthly-user-view-i-enumerable-standard-response';

export type AdminchartusersResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? MonthlyUserViewIEnumerableStandardResponse
    : TContentType extends 'application/json'
    ? MonthlyUserViewIEnumerableStandardResponse
    : TContentType extends 'text/json'
    ? MonthlyUserViewIEnumerableStandardResponse
    : any
  : any;
