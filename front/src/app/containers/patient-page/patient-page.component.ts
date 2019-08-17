import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable, combineLatest } from 'rxjs';

import * as fromPatientView from '../reducers/';
import * as fromPatientViewStatus from '../reducers/patients-view-status.reducer';

import * as patientViewStatusActions from '../actions/patient-view-status.actions';


@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css']
})
export class PatientPageComponent implements OnInit {
  patientViewStatus$: Observable<fromPatientViewStatus.State>;

  patientStatusView;

  constructor(store: Store<fromPatientView.State>) {
    this.patientViewStatus$ = store.pipe(select(fromPatientView.getPatientViewStatus));

    this.patientViewStatus$.subscribe(status => {
      console.log(status);
      this.patientStatusView = status;
    });

  }

  ngOnInit() {
  }

}
