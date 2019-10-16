import { Component, OnInit } from '@angular/core';
import * as fromDoctorViewState from '../../containers/reducers/index';
import * as DoctorViewActions from '../../containers/actions/doctor-view-status.actions';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-doctor-home-page',
  templateUrl: './doctor-home-page.component.html',
  styleUrls: ['./doctor-home-page.component.scss']
})
export class DoctorHomePageComponent implements OnInit {

  constructor(
    private DoctorViewStore: Store<fromDoctorViewState.State>
  ) { }

  ngOnInit() {
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
}
