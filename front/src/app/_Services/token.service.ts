import { Observable } from 'rxjs';
import { IToken } from '../_interfaces/token';
import { ICredentials } from '../_interfaces/credentials';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITokenUser } from '../_interfaces/login';
//import jwtDecode, { JwtPayload } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string): void{
    localStorage.setItem('token', token)
    this.router.navigate(['add-devoir'])
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token')
    return !! token
  }
  clearToken(): void{
    localStorage.removeItem('token')
    this.router.navigate(['auth'])
  }
}
