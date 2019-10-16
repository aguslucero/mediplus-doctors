import { Action } from '@ngrx/store';

export enum DoctorViewActionTypes {
    Home = '[DoctorViewShown] Home',
    DiaryView = '[DiaryView] DiaryView',
    ScheduleView = '[ScheduleView] ScheduleView',
    PendingAppointment = '[PendingAppointment] PendingAppointment'
}

export class Home implements Action {
    readonly type = DoctorViewActionTypes.Home;

    constructor() { }
}


export class DiaryView implements Action {
  readonly type = DoctorViewActionTypes.DiaryView;

  constructor() { }
}

export class ScheduleView implements Action {
  readonly type = DoctorViewActionTypes.ScheduleView;

  constructor() { }
}

export class PendingAppointment implements Action {
  readonly type = DoctorViewActionTypes.PendingAppointment;

  constructor() { }
}
export type DoctorViewActionsUnion =
  | Home
  | DiaryView
  | ScheduleView
  | PendingAppointment;
