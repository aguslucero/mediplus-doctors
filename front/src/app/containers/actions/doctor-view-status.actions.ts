import { Action } from '@ngrx/store';

export enum DoctorViewActionTypes {
    Home = '[DoctorViewShown] Home',
    RequestAppointment = '[DoctorViewShown] Request-Appointment',
    RequestedAppointments = '[DoctorViewShown] Requested-Appointments',
    GoToDiary = '[GoToDiary] GoToDiary'
}

export class Home implements Action {
    readonly type = DoctorViewActionTypes.Home;

    constructor() { }
}

export class RequestAppointment implements Action {
    readonly type = DoctorViewActionTypes.RequestAppointment;

    constructor() { }
}

export class RequestedAppointments implements Action {
  readonly type = DoctorViewActionTypes.RequestedAppointments;

  constructor() { }
}

export class GoToDiary implements Action {
  readonly type = DoctorViewActionTypes.GoToDiary;

  constructor() { }
}
export type DoctorViewActionsUnion =
  | Home
  |GoToDiary;
