import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { NotificationsMenuComponent } from '../notifications-menu/notifications-menu.component';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AppointmentInfo } from 'src/app/models/appointmentInfo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HeaderComponent implements OnInit {

  pending: number;
  notifications: AppointmentInfo[] = [ ] ;

  constructor(private notificationMenu: MatBottomSheet,
    private service: AppointmentService) { }

  openBottomSheet(): void {
    this.notificationMenu.open(NotificationsMenuComponent, {
      data: this.notifications
     }

      ) ;
  }
  ngOnInit() {
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
        console.log(element);
       this.notifications.push(new AppointmentInfo(element.patient.person.firstName, element.patient.person.lastName,
                        element.date, element.hour, element._id ));
      });
      console.log(this.notifications);
     });
   }

}
