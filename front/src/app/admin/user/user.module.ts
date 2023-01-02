import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import { AdddevoirComponent } from './adddevoir/adddevoir.component';
import { CorrigeComponent } from './corrige/corrige.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    IndexComponent,
    AdddevoirComponent,
    CorrigeComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
