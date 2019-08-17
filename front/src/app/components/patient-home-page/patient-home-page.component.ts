import { Component, OnInit } from '@angular/core';
import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-patient-home-page',
  templateUrl: './patient-home-page.component.html',
  styleUrls: ['./patient-home-page.component.css']
})
export class PatientHomePageComponent implements OnInit {

  constructor(
    private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {
  }

  goToRequestAppointment() {
    this.patientViewStore.dispatch(new PatientViewActions.RequestAppointment);
  }
}
