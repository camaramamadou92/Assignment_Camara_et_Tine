import { Observable } from 'rxjs';
import { IToken } from './../_interfaces/token';
import { ICredentials } from './../_interfaces/credentials';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:8010/api/assignments'

  constructor(private http: HttpClient) { }

  login(credentials: ICredentials):Observable<IToken> {
    return this.http.post<IToken>(this.url, credentials)
  }
}
