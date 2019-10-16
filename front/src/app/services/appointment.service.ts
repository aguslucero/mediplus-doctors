import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppointmentService {

  constructor(private httpClient: HttpClient) { }

  getAppointments( ): Observable<any> {
    return this.httpClient.get('/doctors/appointments');
  }
}
