import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

     {
      path: '', component: LayoutAdminComponent, children:[

        { path:'',redirectTo: 'dashboard', pathMatch:'full' },
        { path:'dashboard', component: DashboardComponent},

        {
          path: 'user', loadChildren:() => import('./user/user.module')
           .then(m => m.UserModule)
        }
      ]
     }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
