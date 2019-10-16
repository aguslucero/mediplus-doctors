import { DoctorViewActionTypes, DoctorViewActionsUnion } from '../actions/doctor-view-status.actions';

export interface State {
  isHomeView: boolean;
  isDiaryView: boolean;
  isScheduleView: boolean;
  isPendingAppointment: boolean;
}

const initialState = {
  isHomeView: true,
  isDiaryView: false,
  isScheduleView: false,
  isPendingAppointment: false
};

type ActionsType =
  | DoctorViewActionsUnion;

export function reducer( state = initialState, action: ActionsType): State {
  switch (action.type) {
    case DoctorViewActionTypes.Home: {
      return {
        ...state,
        isHomeView: true,
        isScheduleView: false,
        isDiaryView: false,
        isPendingAppointment: false
      };
    }
    case DoctorViewActionTypes.DiaryView: {
      return {
        ...state,
        isHomeView: false,
        isScheduleView: false,
        isDiaryView: true,
        isPendingAppointment: false
      };
    }
    case DoctorViewActionTypes.ScheduleView: {
      return {
        ...state,
        isHomeView: false,
        isScheduleView: true,
        isDiaryView: false,
        isPendingAppointment: false
      };
    }
    case DoctorViewActionTypes.PendingAppointment: {
      return {
        ...state,
        isHomeView: false,
        isScheduleView: false,
        isDiaryView: false,
        isPendingAppointment: true
      };
    }
    default: {
      return state;
    }
  }
}
