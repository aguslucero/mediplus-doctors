import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GetDoctorsFiltered, GetDoctorsFilteredSuccess, GetDoctorsFilteredError,
   DoctorsFilteredActionTypes, DoctorsFilteredActionsUnion} from '../actions/doctors-filtered.actions';
import { DoctorsFilteredService } from '../services/back.service';

@Injectable()
export class DoctorsFilteredEffects {
  constructor( private actions$: Actions, private doctorsFiltered: DoctorsFilteredService ) {
  }

  @Effect() getTodos$ = this.actions$.pipe(
    ofType<GetDoctorsFiltered>(DoctorsFilteredActionTypes.GET_DOCTORS_FILTERED),
    switchMap(action =>
      this.doctorsFiltered.getDoctorsFiltered()
           .map(doctors => ({type: GetDoctorsFilteredSuccess, payload: doctors}))
           .catch(() => console.log('error')))
  );
}
