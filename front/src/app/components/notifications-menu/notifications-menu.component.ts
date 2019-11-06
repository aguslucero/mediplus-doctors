import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { AppointmentInfo } from 'src/app/models/appointmentInfo';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { Store } from '@ngrx/store';
import * as DoctorViewActions from '../../containers/actions/doctor-view-status.actions';
import * as fromDoctorViewState from '../../containers/reducers/index';


@Component({
  selector: 'app-notifications-menu',
  templateUrl: './notifications-menu.component.html',
  styleUrls: ['./notifications-menu.component.css']
})
export class NotificationsMenuComponent  {


  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
              private notificationMenu: MatBottomSheetRef<NotificationsMenuComponent >,
              private DoctorViewStore: Store<fromDoctorViewState.State>,
     ) {}


  GoToPendingAppointment() {
    this.DoctorViewStore.dispatch(new DoctorViewActions.PendingAppointment);
    this.notificationMenu.dismiss();
  }
}
