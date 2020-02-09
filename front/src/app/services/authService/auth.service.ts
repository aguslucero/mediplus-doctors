import { Request } from 'express';
import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
   }

  logIn( user: {email: string, password: string} ): Observable<any> {
     return this.httpClient.post('/auth/login', { user });
 }

  currentUser(): Observable<any> {
    return this.httpClient.get('/auth/currentUser', {headers: new HttpHeaders({'Authorization': localStorage.getItem('token') })});

  }


}
