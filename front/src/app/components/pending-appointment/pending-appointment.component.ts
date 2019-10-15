import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import * as fromDoctorViewState from '../../containers/reducers/index';
import * as DoctorViewActions from '../../containers/actions/doctor-view-status.actions';
import * as DoctorsFilteresActions from '../../containers/actions/doctors-filtered.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pending-appointment',
  templateUrl: './pending-appointment.component.html',
  styleUrls: ['./pending-appointment.component.scss']
})
export class PendingAppointmentComponent implements OnInit {

  constructor(private DoctorViewStore: Store<fromDoctorViewState.State>) { }

  ngOnInit() {
  }

  goToHome = () => {
    this.DoctorViewStore.dispatch(new DoctorViewActions.Home);
  }

}
