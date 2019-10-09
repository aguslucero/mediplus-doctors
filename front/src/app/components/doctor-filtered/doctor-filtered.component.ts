import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor-filtered',
  templateUrl: './doctor-filtered.component.html',
  styleUrls: ['./doctor-filtered.component.css']
})
export class DoctorFilteredComponent implements OnInit {

  @Input() doctor: any;

  constructor() { }

  ngOnInit() {
  }

}

