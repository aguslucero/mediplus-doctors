import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { AppointmentService} from '../../services/appointment.service';
import { element } from '@angular/core/src/render3/instructions';
import { AppointmentInfo } from '../../models/appointmentInfo';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

 let ELEMENT_DATA: AppointmentInfo[] = [ ] ;
@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class AppointmentTableComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'day', 'hour', 'options'];
  expandedElement: AppointmentInfo | null;
  AppointmentInfo: AppointmentInfo ;
  durationInSeconds = 3;
  constructor (private service: AppointmentService,
               private snackBar: MatSnackBar) { }

  ngOnInit() {
   this.getPendingAppointments();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   getPendingAppointments () {
     ELEMENT_DATA = [];
    this.service.getPendingAppointments().subscribe(
      data => {
       data.forEach(element => {
         console.log(element);
        ELEMENT_DATA.push(new AppointmentInfo(element.patient.person.firstName, element.patient.person.lastName,
                         element.date, element.hour, element._id ));
       });
       this.dataSource = new MatTableDataSource(ELEMENT_DATA);
       console.log(ELEMENT_DATA);
      });
    }

    aproveAppointment(appointmentId: string) {
     this.service.approveAppointment(appointmentId).subscribe(
      data => {
        if ( data.success = true) {
          this.openSnackBar('Turno aceptado correctamente!');
          this.getPendingAppointments();
        }
        console.log(data);
      });
    }

    rejectAppointment(appointmentId: string) {
      this.service.rejectAppointment(appointmentId).subscribe(
        data => {
          if ( data.success = true) {
            this.openSnackBar('El turno ha sido rechazado');
            this.getPendingAppointments();
          }
          console.log(data);
        });
      }


    openSnackBar( action: string) {
      this.snackBar.openFromComponent( SnackbarComponent, {
        duration: this.durationInSeconds * 1000,
        data: action,
      });
    }

  }






