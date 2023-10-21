/* tslint:disable */
import { DailyComplaintCountIEnumerableStandardResponse } from './daily-complaint-count-i-enumerable-standard-response';

export type AdminchartcomplaintsresolvedResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? DailyComplaintCountIEnumerableStandardResponse
    : TContentType extends 'application/json'
    ? DailyComplaintCountIEnumerableStandardResponse
    : TContentType extends 'text/json'
    ? DailyComplaintCountIEnumerableStandardResponse
    : any
  : any;
