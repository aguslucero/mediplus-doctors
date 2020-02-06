import { WorkableDay } from './../../models/workableDay';
import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../services/doctorService/doctor.service';






@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css'],
})
export class SchedulePageComponent implements OnInit {

  week = [{'name': 'Lunes', 'number': 1   }, {'name': 'Martes', 'number': 2  }, {'name': 'Miercoles', 'number': 3   },
          {'name': 'Jueves', 'number': 4  }, {'name': 'Viernes', 'number': 5 }, {'name': 'Sabado', 'number': 6  },
          {'name': 'Domingo', 'number': 7 }];
  workabledays = [];
  constructor(private doctorService: DoctorService ) {

  }

  ngOnInit() {

    console.log(this.week);
    this.getWorkabledays();
  }

  createWorcableDay(day: number) {
    console.log(this.workabledays[day]);
  }

 getWorkabledays () {
   this.workabledays = [];
  this.doctorService.getCurrentUser().subscribe(
   data => {
    data.workableWeek.forEach(element => {
    const  day = new WorkableDay(
        element.name,
        element.number,
        element.startHour,
        element.finishHour,
        element.breakStart,
        element.breakFinish,
        element.maxAppointments);
    this.workabledays[element.number] = day;
    }

        );
     });
    console.log(this.workabledays);
   }
 }


