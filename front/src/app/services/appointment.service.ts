import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  getAppointments( id: string): Observable<any> {
    return  this.http.get(`http://localhost:3001/vr/api/appointment/doctor/:${id}`);
  }
  getAll( ): Observable<any> {
    return  this.http.get(`http://localhost:3001/vr/api/doctor/all`);
  }
}
