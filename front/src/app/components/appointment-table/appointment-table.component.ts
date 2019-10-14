import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';


export interface AppointmentInfo {
  name: string;
  day: string;
  hour: string;
  photo: string;
  info: string;
}

const ELEMENT_DATA: AppointmentInfo[] = [
  {
    name: 'Agustin Lucero',
    day: '20/11/2019',
    hour: '13:30 hs',
    photo: 'FOTO',
    info: `aca va toda la infomacion asociada con el paciente, tambien se le podria poner una descripcion
     del por que pide el turno.`
  }, {
    name: 'Juan Pardal',
    day: '20/11/2019',
    hour: '14:00 hs',
    photo: 'FOTO',
    info: `aca va toda la infomacion asociada con el paciente, tambien se le podria poner una descripcion
     del por que pide el turno.`
  }, {
    name: 'Jose Cisneros',
    day: '20/11/2019',
    hour: '15:00 hs',
    photo: 'FOTO',
    info: `aca va toda la infomacion asociada con el paciente, tambien se le podria poner una descripcion
     del por que pide el turno.`
  }, {
    name: 'Santiago Rudolf',
    day: '20/11/2019',
    hour: '14:30 hs',
    photo: 'FOTO',
    info: `aca va toda la infomacion asociada con el paciente, tambien se le podria poner una descripcion
     del por que pide el turno.`
  },
];
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

export class AppointmentTableComponent  {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'day', 'hour', 'options'];
  expandedElement: AppointmentInfo | null;
}



