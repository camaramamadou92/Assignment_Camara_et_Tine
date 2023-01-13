import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Gestion des assignments - Rendu Mamadou & Tine';

  constructor(
    private authService: AuthService,
    private router: Router,
    private assignmentsService: AssignmentsService
  ) {}
//méthode qui est appelée lorsque l'utilisateur 
//soumet un formulaire de connexion ou clique sur le bouton de connexion.
  login() {
    if (!this.authService.loggedIn) {
      console.log("je suis connecté");
      this.authService.logIn();
    } else {
      console.log("je suis déconnecté");
      this.authService.logOut();
      this.router.navigate(['/home']);
    }
  }

  ajoutElementBase() {
    //on utlise une méthode qui utilise ForkJoin pour combiner 
    //plusieurs observables en un seul observable, 
    //qui est utilisé pour remplir la base de données avec les données.
    this.assignmentsService.peuplerBDAvecForkJoin().subscribe(() => {
      console.log('remplissage de la base avec les données');
      this.router.navigate(['/home'], { replaceUrl: true });
    });
  }
}
