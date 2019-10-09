import { PatientViewActionTypes, PatientViewActionsUnion } from '../actions/patient-view-status.actions';
import { DoctorsFilteredActionTypes, DoctorsFilteredActionsUnion } from '../actions/doctors-filtered.actions';


export interface State {
  data: any;
  loading: boolean;
  error: any;
}

const initialState = {
  data: [],
  loading: false,
  error: null
};


export function reducer( state = initialState, { type, payload } ) {
  switch ( type ) {
    case DoctorsFilteredActionTypes.GET_DOCTORS_FILTERED:
      return Object.assign({}, state, {pending: true, error: null});
    case DoctorsFilteredActionTypes.GET_DOCTORS_FILTERED_SUCCESS:
      return Object.assign({}, state, {data: payload, pending: false});
    case DoctorsFilteredActionTypes.GET_DOCTORS_FILTERED_ERROR:
      return Object.assign({}, state, {pending: false, error: 'Error'});
    default:
      return state;
  }
}
