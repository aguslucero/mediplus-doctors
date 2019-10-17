import { Component, OnInit } from '@angular/core';
import * as fromDoctorViewState from '../../containers/reducers/index';
import * as DoctorViewActions from '../../containers/actions/doctor-view-status.actions';
import { Store } from '@ngrx/store';
import { AppointmentService } from '../../services/appointment.service';
@Component({
  selector: 'app-doctor-home-page',
  templateUrl: './doctor-home-page.component.html',
  styleUrls: ['./doctor-home-page.component.scss']
})
export class DoctorHomePageComponent implements OnInit {

  pending: number ;

  constructor(
    private DoctorViewStore: Store<fromDoctorViewState.State>,
    private service: AppointmentService
  ) { }

  ngOnInit() {
    this.countPendingAppointment();
  }

  GoToDiaryView() {
    this.DoctorViewStore.dispatch(new DoctorViewActions.DiaryView);
  }

  GoToScheduleView() {
    this.DoctorViewStore.dispatch(new DoctorViewActions.ScheduleView);
  }

  GoToPendingAppointment() {
    this.DoctorViewStore.dispatch(new DoctorViewActions.PendingAppointment);
  }

  countPendingAppointment() {
    this.service.getPendingAppointments().subscribe(
      data => { this.pending = data.length;
                 }
    );
  }
}
