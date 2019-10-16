import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css'],
})
export class SchedulePageComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  onClickSubmit(data) {
    const workableDay = {
      name: data.day,
      startHour: data.start,
      finishHour: data.end,
      breakStart: data.bstart,
      breakFinish: data.bend
    }

    console.log(workableDay);
 }

}
