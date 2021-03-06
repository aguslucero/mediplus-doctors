import { AuthService } from './../../services/authService/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentInfo } from 'src/app/models/appointmentInfo';
import { Doctor } from '../../models/doctor';
import { Store } from '@ngrx/store';
import * as fromDoctorViewState from '../../containers/reducers/index';
import * as DoctorViewActions from '../../containers/actions/doctor-view-status.actions';
import {Router} from '@angular/router';






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HeaderComponent implements OnInit {

  pending: number;
  notifications: AppointmentInfo[] = [ ] ;
  currentUser: Doctor;

  constructor(private notificationMenu: MatBottomSheet,
    private service: AppointmentService, private auth: AuthService,
    private DoctorViewStore: Store<fromDoctorViewState.State>,
    private router: Router) { }

  ngOnInit() {
  this.getCurrentUser();
  this.countPendingAppointment();
  this.getPendingAppointments ();
  }

  countPendingAppointment() {
    this.service.getPendingAppointments().subscribe(
      data => { this.pending = data.length;
                 }
    );
  }

  getPendingAppointments () {
    this.notifications = [];
   this.service.getPendingAppointments().subscribe(
     data => {
      data.forEach(element => {
       this.notifications.push(new AppointmentInfo(element.patient.person.firstName, element.patient.person.lastName,
                        element.date, element.hour, element._id, element.observation ));
      });
     });
   }

   getCurrentUser() {
     this.auth.currentUser().subscribe(
      data => {
        this.currentUser = new Doctor(data._id, data.person.firstName, data.person.lastName, data.email, data.prepaid, data.phone, data.adress);
        console.log('currentUser', this.currentUser);
      }
    );
   }
   goToHome() {
    this.DoctorViewStore.dispatch(new DoctorViewActions.Home);
  }
  GoToPendingAppointment() {
    this.DoctorViewStore.dispatch(new DoctorViewActions.PendingAppointment);
    this.notificationMenu.dismiss();
  }
  goToProfile() {
    this.DoctorViewStore.dispatch(new DoctorViewActions.DoctorProfile);
  }

  logOut() {
  localStorage.removeItem('token');
  this.router.navigate(['login']);

  }

}
