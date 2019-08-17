import { createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromPatientViewStatus from './patients-view-status.reducer';


export interface PatientViewState {
  patientViewStatus: fromPatientViewStatus.State;
}

export interface State {
  patientView: PatientViewState;
}

export const reducers: ActionReducerMap<PatientViewState> = {
  patientViewStatus: fromPatientViewStatus.reducer
}

export const getPatientViewEntity = (state: State) => state.patientView;

export const getPatientViewStatus = createSelector(
  getPatientViewEntity,
  (state: PatientViewState) => state.patientViewStatus
);
