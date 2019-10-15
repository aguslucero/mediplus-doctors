import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-diary-header',
  templateUrl: './diary-header.component.html',
  styleUrls: ['./diary-header.component.css']
})
export class DiaryHeaderComponent {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

  constructor() { }


}
