import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import { AppointmentService} from '../../services/appointment.service';
import { element } from '@angular/core/src/render3/instructions';
import { AppointmentInfo } from '../../models/appointmentInfo';

 const ELEMENT_DATA: AppointmentInfo[] = [ ] ;
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
  constructor (private service: AppointmentService) { }
  ngOnInit() {
   this.getPendingAppointments();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }

   getPendingAppointments () {
    this.service.getPendingAppointments().subscribe(
      data => {
       data.forEach(element => {
        ELEMENT_DATA.push(new AppointmentInfo(element.patient.person.firstName, element.patient.person.lastName, element.date));
       });
       this.dataSource = new MatTableDataSource(ELEMENT_DATA);
       console.log(ELEMENT_DATA);
      });
    }



}



