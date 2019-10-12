import { DoctorViewActionTypes, DoctorViewActionsUnion } from '../actions/doctor-view-status.actions';

export interface State {
  isHomeView: boolean;
  isDiaryView: boolean;
  isPendingAppointment: boolean;
}

const initialState = {
  isHomeView: true,
  isDiaryView: false,
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
        isDiaryView: false,
        isPendingAppointment: false
      };
    }
    case DoctorViewActionTypes.DiaryView: {
      return {
        ...state,
        isHomeView: false,
        isDiaryView: true,
        isPendingAppointment: false
      };
    }
    case DoctorViewActionTypes.PendingAppointment: {
      return {
        ...state,
        isHomeView: false,
        isDiaryView: false,
        isPendingAppointment: true
      };
    }
    default: {
      return state;
    }
  }
}
