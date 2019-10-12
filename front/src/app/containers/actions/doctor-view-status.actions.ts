import { Action } from '@ngrx/store';

export enum DoctorViewActionTypes {
    Home = '[DoctorViewShown] Home',
    DiaryView = '[DiaryView] DiaryView',
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

export class PendingAppointment implements Action {
  readonly type = DoctorViewActionTypes.PendingAppointment;

  constructor() { }
}
export type DoctorViewActionsUnion =
  | Home
  | DiaryView
  | PendingAppointment;
