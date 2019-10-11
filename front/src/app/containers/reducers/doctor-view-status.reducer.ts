import { DoctorViewActionTypes, DoctorViewActionsUnion } from '../actions/doctor-view-status.actions';

export interface State {
  isHomeView: boolean;
  isGoToDiary: boolean;
}

const initialState = {
  isHomeView: true,
  isGoToDiary: false
};

type ActionsType =
  | DoctorViewActionsUnion;

export function reducer( state = initialState, action: ActionsType): State {
  switch (action.type) {
    case DoctorViewActionTypes.Home: {
      return {
        ...state,
        isHomeView: true,
        isGoToDiary: false
      };
    }
    case DoctorViewActionTypes.GoToDiary: {
      return {
        ...state,
        isHomeView: false,
        isGoToDiary: true
      };
    }
    default: {
      return state;
    }
  }
}
