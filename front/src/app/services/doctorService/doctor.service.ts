import { WorkableDay } from './../../models/workableDay';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HealthCare } from 'src/app/models/healthCare';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private httpClient: HttpClient) { }

  getCurrentUser( ): Observable<any> {
    return this.httpClient.get('/doctors/CurrentUser', {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })} );
  }

  CreateWorkableDay( number: Number,  startHour: Number, finishHour: Number,
                     breakFinish: Number, breakStart: Number ): Observable<any> {
                       console.log('entra la servicio');
    const workableDay = new WorkableDay('nombre', number, startHour , finishHour, breakStart, breakFinish, 1);
    return this.httpClient.post('/doctors/CreateWorkableDay', {
     workableDay

    }, {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })});


  }

  assingHealthCare (prepaid: HealthCare) {
    return this.httpClient.post('/doctors/prepaid/', {
      prepaid
    },
    {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })} );
  }

  getAllClinics() {
    return this.httpClient.get('/doctors/clinics');
  }

  clinicAdd( id: string ): Observable<any> {
    return this.httpClient.post('/doctors/clinicAdd/' + id , {},
     {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })} );

  }
}
