import { Action } from '@ngrx/store';

export enum DoctorsFilteredActionTypes {
    GET_DOCTORS_FILTERED = '[DOCTORS_FILTERED] GET_DOCTORS_FILTERED',
    GET_DOCTORS_FILTERED_SUCCESS = '[DOCTORS_FILTERED] GET_DOCTORS_FILTERED_SUCCESS',
    GET_DOCTORS_FILTERED_ERROR = '[DOCTORS_FILTERED] GET_DOCTORS_FILTERED_ERROR'
}

export class GetDoctorsFiltered implements Action {
    readonly type = DoctorsFilteredActionTypes.GET_DOCTORS_FILTERED;
    constructor() { }
}

export class GetDoctorsFilteredSuccess implements Action {
    readonly type = DoctorsFilteredActionTypes.GET_DOCTORS_FILTERED_SUCCESS;

    constructor() { }
}

export class GetDoctorsFilteredError implements Action {
  readonly type = DoctorsFilteredActionTypes.GET_DOCTORS_FILTERED_ERROR;

  constructor() { }
}

export type DoctorsFilteredActionsUnion =
  | GetDoctorsFiltered
  | GetDoctorsFilteredSuccess
  | GetDoctorsFilteredError;
