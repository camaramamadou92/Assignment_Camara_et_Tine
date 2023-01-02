import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { EditerDevoirComponent } from './editer-devoir/editer-devoir.component';
import { DetailDevoirComponent } from './detail-devoir/detail-devoir.component';
import { AddDevoirComponent } from './add-devoir/add-devoir.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', component: LayoutHomeComponent, children:[

    {path: '' , redirectTo: 'add-devoir', pathMatch: 'full'},
    {path: 'add-devoir' , component:AddDevoirComponent},
    {path: 'detail-devoir', component:DetailDevoirComponent},
    {path: 'editer-devoir', component:EditerDevoirComponent}

    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantRoutingModule { }
