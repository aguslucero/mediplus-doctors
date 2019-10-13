import {Component} from '@angular/core';

export interface Turnos {
  name: string;
  day: string;
  hour: string;
}
const ELEMENT_DATA: Turnos[] = [
  {day: '13/11/2019', name: 'Lucero Agustin', hour: '13:30hs'},
  {day: '15/11/2019', name: 'Juan Pardal', hour: '14:30hs'},
  {day: '16/11/2019', name: 'Jose Cisneros', hour: '11:30hs'},
  {day: '19/11/2019', name: 'Santiago Rudolf', hour: '10:30hs'},
];

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent  {
  displayedColumns: string[] = ['name', 'day', 'hour'];
  dataSource = ELEMENT_DATA;
  constructor() { }


}
