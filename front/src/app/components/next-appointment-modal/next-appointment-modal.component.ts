import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { AppointmentService} from '../../services/appointment.service';
import { element } from '@angular/core/src/render3/instructions';
import { AppointmentInfo } from '../../models/appointmentInfo';

let ELEMENT_DATA: AppointmentInfo[] = [ ] ;

@Component({
  selector: 'app-next-appointment-modal',
  templateUrl: './next-appointment-modal.component.html',
  styleUrls: ['./next-appointment-modal.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class NextAppointmentModalComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  columnsToDisplay = ['name', 'day', 'hour'];
  expandedElement: AppointmentInfo | null;
  AppointmentInfo: AppointmentInfo ;

  constructor(
    public dialogRef: MatDialogRef<NextAppointmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: '',
    private service: AppointmentService) {}

    ngOnInit() {
      this.getAppointments();
     }

     onNoClick(): void {
    this.dialogRef.close();
    }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   getAppointments () {
     ELEMENT_DATA = [];
    this.service.getApprovedAppointments().subscribe(
      data => {
       data.forEach(element => {
        ELEMENT_DATA.push(new AppointmentInfo(element.patient.person.firstName, element.patient.person.lastName,
                           element.date, element.hour, element._id, element.observation ));
       });
       this.dataSource = new MatTableDataSource(ELEMENT_DATA);
       console.log(ELEMENT_DATA);
      });
    }



}


