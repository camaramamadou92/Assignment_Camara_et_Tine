import { AddDevoirComponent } from '../../etudiant/add-devoir/add-devoir.component';
import { DeleteComponent } from './delete/delete.component';
import { CorrigeComponent } from './corrige/corrige.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'',component: IndexComponent },
  // pattern pour specifier l'objet
  {path:'corrige/:id', component: CorrigeComponent },
  {path: 'delete/:id', component: DeleteComponent},
  {path: 'adddevoir', component: AddDevoirComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
