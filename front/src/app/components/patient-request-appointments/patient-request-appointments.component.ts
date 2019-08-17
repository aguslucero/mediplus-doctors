import { Component, OnInit } from '@angular/core';

import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-patient-request-appointments',
  templateUrl: './patient-request-appointments.component.html',
  styleUrls: ['./patient-request-appointments.component.css']
})
export class PatientRequestAppointmentsComponent implements OnInit {

  constructor(
    private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {
  }

  goToHome() {
    this.patientViewStore.dispatch(new PatientViewActions.Home);
  }
}
