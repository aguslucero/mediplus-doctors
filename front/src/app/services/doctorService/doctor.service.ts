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

}
