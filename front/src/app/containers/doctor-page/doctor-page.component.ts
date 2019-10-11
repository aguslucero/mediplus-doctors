import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';

import * as fromDoctorView from '../reducers';
import * as fromDoctorViewStatus from '../reducers/doctor-view-status.reducer';

import * as DoctorViewStatusActions from '../actions/doctor-view-status.actions';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.scss']
})
export class DoctorPageComponent implements OnInit {
  DoctorViewStatus$: Observable<fromDoctorViewStatus.State>;

  doctorStatusView;

  constructor(store: Store<fromDoctorView.State>) {
    this.DoctorViewStatus$ = store.pipe(select(fromDoctorView.getDoctorViewStatus));

    this.DoctorViewStatus$.subscribe(status => {
      console.log(status);
      this.doctorStatusView = status;
    });

  }

  ngOnInit() {
  }

}
