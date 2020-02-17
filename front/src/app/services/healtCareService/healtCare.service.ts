import { WorkableDay } from './../../models/workableDay';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HealtCareService {

  constructor(private httpClient: HttpClient) { }

  getHealtCares( ): Observable<any> {
    return this.httpClient.get('/', {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })} );
  }

}
