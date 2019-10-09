import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';
import * as DoctorsFilteresActions from '../../containers/actions/doctors-filtered.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-select-specialist',
  templateUrl: './patient-select-specialist.component.html',
  styleUrls: ['./patient-select-specialist.component.scss']
})
export class PatientSelectSpecialistComponent implements OnInit {

  specialistSelected = '';
  doctorsFilteredState$: Observable<fromPatientVIewState.State>;
  doctorsBySpecialist: Observable<any>;


  specialistArray = ['Traumatologo', 'Cirujano', 'Pediatra', 'Kinesiologo'];
  constructor(
    private http: HttpClient,
    private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {

  }

  goToHome = () => {
    this.patientViewStore.dispatch(new PatientViewActions.Home);
  }

  onSelectedSpecialist = (specialistName: string): void => {
    this.doctorsBySpecialist = this.http.get('/doctors/specialist/' + specialistName);


     this.specialistSelected = specialistName;

    // NO BORRAR CODIGO COMENTADO.

    // this.patientViewStore.dispatch(new DoctorsFilteresActions.GetDoctorsFiltered());

    // this.patientViewStore.pipe(select(fromPatientVIewState.getDoctorsFilteredStatus));
    // this.patientViewStore.subscribe((data) => {
    //   console.log(data.doctorsFiltered.doctorsFilteredStatus.data);
    // })
  }

}
