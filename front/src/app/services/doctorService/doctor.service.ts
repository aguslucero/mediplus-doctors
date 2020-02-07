import { WorkableDay } from './../../models/workableDay';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { }

  getCurrentUser( ): Observable<any> {
    return this.httpClient.get('/doctors/CurrentUser');
  }

  CreateWorkableDay( number: Number,  startHour: Number, finishHour: Number,
                     breakFinish: Number, breakStart: Number ): Observable<any> {
                       console.log('entra la servicio');
    const workableDay = new WorkableDay('nombre', number, startHour , finishHour, breakStart, breakFinish, 1);
    return this.httpClient.post('/doctors/CreateWorkableDay', {
     workableDay

    });


  }

}
