import { Component,  OnInit, OnChanges  } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import { startOfDay } from 'date-fns';

import * as fromDoctorViewState from '../../containers/reducers/index';
import * as DoctorViewActions from '../../containers/actions/doctor-view-status.actions';
import * as DoctorsFilteresActions from '../../containers/actions/doctors-filtered.actions';
import { Observable, Subject } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NextAppointmentModalComponent } from '../next-appointment-modal/next-appointment-modal.component';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Patient } from 'src/app/models/patient';
import { Appointment } from 'src/app/models/appointment';

import * as moment from 'moment';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit  {

  view = 'month';
  refresh: Subject<any> = new Subject();

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];
  dataLoaded: Boolean = false;
  appointments: Appointment[] = [];

  ngOnInit() {
  }

  constructor(private DoctorViewStore: Store<fromDoctorViewState.State>, public dialog: MatDialog, public AS: AppointmentService) {
                this.appointments = this.getAllAppointments();
              }

  goToHome = () => {
    this.DoctorViewStore.dispatch(new DoctorViewActions.Home);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NextAppointmentModalComponent, {
      width: '60%',
      autoFocus: false,
      maxHeight: '90vh'
    });
 }

  getAllAppointments(): Appointment[] {
    const appointmentsArray: Appointment[] = new Array;
    this.AS.getAllAppointments().subscribe(appointments => {
      appointments.forEach(appointment => {
        const patient = new Patient(appointment.patient._id, appointment.patient.person.firstname,
           appointment.patient.person.surname, appointment.patient.email, appointment.patient.person.phone, appointment.patient.person)
        appointmentsArray.push(new Appointment(patient, appointment.date, appointment.hour, appointment.rejected, appointment.approved));
      });

      appointmentsArray.forEach(appointment => {
        if (appointment.approved) {
          this.events.push({
            start: new Date(moment(appointment.date, 'DD-MM-YYYY')
            .add(appointment.hour.split(':')[0], 'hours').add(appointment.hour.split(':')[1], 'minutes').format('YYYY-MM-DD HH:mm')),
            title: 'Turno con ' + appointment.patient.firstName + ' ' + appointment.patient.lastName + 'a las ' + appointment.hour,
            color: {primary: '#1e90ff	', secondary: '#d1e8ff'},
          });
        }
      });
      this.dataLoaded = true;
  });

    return appointmentsArray;
  }

  endAppointmentTime(start: string) {
    let hour = parseInt(start.split(':')[0]);
    let min = parseInt(start.split(':')[1]);

    let endMin = min + 30;

    if (endMin === 60) {
      hour++;
      endMin = 0
    }

    return hour + ':' + endMin;
  }
}
