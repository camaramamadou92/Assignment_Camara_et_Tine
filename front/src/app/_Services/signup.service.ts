import { Observable } from 'rxjs';
import { IToken } from './../_interfaces/token';
import { ICredentials } from './../_interfaces/credentials';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  login(form: any) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:8010/api/assignments'

  constructor(private http: HttpClient) { }

  signup(credentials: any):any{
    return this.http.post(this.url, credentials)
  }
}
