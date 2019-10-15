import { Component, ChangeDetectionStrategy  } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import * as fromDoctorViewState from '../../containers/reducers/index';
import * as DoctorViewActions from '../../containers/actions/doctor-view-status.actions';
import * as DoctorsFilteresActions from '../../containers/actions/doctors-filtered.actions';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-diary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent  {

  view = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  constructor(private DoctorViewStore: Store<fromDoctorViewState.State>) { }

  goToHome = () => {
    this.DoctorViewStore.dispatch(new DoctorViewActions.Home);
  }

}
