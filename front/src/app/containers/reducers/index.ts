import { createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromPatientViewStatus from './patients-view-status.reducer';
import * as fromDoctorsFilteredStatus from './doctors-filtered.reducer';


export interface PatientViewState {
  patientViewStatus: fromPatientViewStatus.State;
  doctorsStatus: fromDoctorsFilteredStatus.State;
}
export  interface DoctorsFilteredState {
  doctorsFilteredStatus: fromDoctorsFilteredStatus.State;
}

export interface State {
  patientView: PatientViewState;
  doctorsFiltered: DoctorsFilteredState;
}

export const reducers: ActionReducerMap<PatientViewState> = {
  patientViewStatus: fromPatientViewStatus.reducer,
  doctorsStatus: fromDoctorsFilteredStatus.reducer
};
export const reducersDoctorsFiltered: ActionReducerMap<DoctorsFilteredState> = {
  doctorsFilteredStatus: fromDoctorsFilteredStatus.reducer
};

export const getDoctorsFilteredEntity = (state: State) => state.doctorsFiltered;

export const getDoctorsFilteredStatus = createSelector(
    getDoctorsFilteredEntity,
    (state: DoctorsFilteredState) => state.doctorsFilteredStatus
  );

export const getPatientViewEntity = (state: State) => state.patientView;

export const getPatientViewStatus = createSelector(
  getPatientViewEntity,
  (state: PatientViewState) => state.patientViewStatus
);
