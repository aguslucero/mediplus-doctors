import { createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromDoctorViewStatus from './doctor-view-status.reducer';
import * as fromDoctorsFilteredStatus from './doctors-filtered.reducer';


export interface DoctorViewState {
  DoctorViewStatus: fromDoctorViewStatus.State;
  doctorsStatus: fromDoctorsFilteredStatus.State;
}
export  interface DoctorsFilteredState {
  doctorsFilteredStatus: fromDoctorsFilteredStatus.State;
}

export interface State {
  DoctorView: DoctorViewState;
  doctorsFiltered: DoctorsFilteredState;
}

export const reducers: ActionReducerMap<DoctorViewState> = {
  DoctorViewStatus: fromDoctorViewStatus.reducer,
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

export const getDoctorViewEntity = (state: State) => state.DoctorView;

export const getDoctorViewStatus = createSelector(
  getDoctorViewEntity,
  (state: DoctorViewState) => state.DoctorViewStatus
);
