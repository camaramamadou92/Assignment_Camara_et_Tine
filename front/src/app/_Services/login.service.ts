import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataUser, ISingleUser } from '../_interfaces/login';
import { IToken } from '../_interfaces/token';
import { ICredentials } from '../_interfaces/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8010/api/assignments'



  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<IToken>{
    return this.http.post<IToken>(this.url, credentials)
  }
}


@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(assignmentName:string, action:string) {
    // action = ajouté, modifié, supprimé, etc.

    console.log(`LOGGING SERVICE : ${assignmentName} ${action}`);
  }
}
