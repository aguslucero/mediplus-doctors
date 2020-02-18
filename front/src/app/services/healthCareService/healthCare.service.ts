import { WorkableDay } from '../../models/workableDay';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealthCareService {

  constructor(private httpClient: HttpClient) { }

  getHealthCares( ): Observable<any> {
    return this.httpClient.get('healthcare/allPrepaids', {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })} );
  }


}
