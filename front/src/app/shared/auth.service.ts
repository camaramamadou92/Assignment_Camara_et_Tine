import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  logIn() {
    
    this.loggedIn = true;
  }

  logOut() {
    // appelée typiquement par le bouton de deconnexion

    this.loggedIn = false;
  }

  isAdmin() {
    let isUserAdmin = new Promise((resolve, reject) => {
      resolve(this.loggedIn);
    });
    // renvoie une promesse !
    return isUserAdmin;
  }

  constructor() { }
}
