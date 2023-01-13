import { TokenService } from './../_Services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../auth/login/login.component';

@Injectable({
  providedIn: 'root'
})

export class GuardGuard implements CanActivate {

  constructor ( private router : Router, private tokenservice: TokenService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.tokenservice.isLogged() == true){

        return true;
      }
      else

      return this.router.navigate(['auth']);



  }

}
