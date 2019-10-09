import { PatientViewActionTypes, PatientViewActionsUnion } from '../actions/patient-view-status.actions';

export interface State {
  isHomeView: boolean;
  isRequestAppointmentView: boolean;
  isRequestedAppointmentsView: boolean;
  isSelectSpecialist: boolean;
}

const initialState = {
  isHomeView: true,
  isRequestAppointmentView: false,
  isRequestedAppointmentsView: false,
  isSelectSpecialist: false
};

type ActionsType =
  | PatientViewActionsUnion;

export function reducer( state = initialState, action: ActionsType) : State {
  switch (action.type) {
    case PatientViewActionTypes.Home: {
      return {
        ...state,
        isHomeView: true,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: false
      };
    }
    case PatientViewActionTypes.RequestAppointment: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: true,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: false

      };
    }
    case PatientViewActionTypes.RequestedAppointments: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: true,
        isSelectSpecialist: false

      };
    }
    case PatientViewActionTypes.SelectSpecialist: {
      return {
        ...state,
        isHomeView: false,
        isRequestAppointmentView: false,
        isRequestedAppointmentsView: false,
        isSelectSpecialist: true
      };
    }
    default: {
      return state;
    }
  }
}
