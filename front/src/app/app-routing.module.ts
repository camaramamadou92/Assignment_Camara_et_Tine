import { AddDevoirComponent } from './etudiant/add-devoir/add-devoir.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthModule } from './auth/auth.module';
import { Error404Component } from './other/error404/error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './_help/guard.guard';

// ROUTEUR PRINCIPALE

const routes: Routes = [

  {
    path: '', loadChildren:() => import('./etudiant/etudiant.module')
       .then(m => m.EtudiantModule),canActivate : [GuardGuard]
  },
  {
    path: 'admin', loadChildren:() => import('./admin/admin.module')
      .then(m => m.AdminModule),canActivate : [GuardGuard]
  },
  {
   path: 'auth', loadChildren:() => import('./auth/auth.module')
      .then(m=> m.AuthModule),
  },
  {
    path: '**', component: Error404Component
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
