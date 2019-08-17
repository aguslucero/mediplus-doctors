import { Action } from '@ngrx/store';

export enum PatientViewActionTypes {
    Home = '[PatientViewShown] Home',
    RequestAppointment = '[PatientViewShown] Request-Appointment',
    RequestedAppointments = '[PatientViewShown] Requested-Appointments'
}

export class Home implements Action {
    readonly type = PatientViewActionTypes.Home;

    constructor() { }
}

export class RequestAppointment implements Action {
    readonly type = PatientViewActionTypes.RequestAppointment;

    constructor() { }
}

export class RequestedAppointments implements Action {
  readonly type = PatientViewActionTypes.RequestedAppointments;

  constructor() { }
}
export type PatientViewActionsUnion =
  | Home
  | RequestAppointment
  | RequestedAppointments;
