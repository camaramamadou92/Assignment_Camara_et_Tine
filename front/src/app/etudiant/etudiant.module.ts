import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './../app.component';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDevoirComponent } from './add-devoir/add-devoir.component';
import { DetailDevoirComponent } from './detail-devoir/detail-devoir.component';
import { EditerDevoirComponent } from './editer-devoir/editer-devoir.component';
import { EtudiantRoutingModule } from './etudiant-routing.module';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { EnteteComponent } from './entete/entete.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AddDevoirComponent,
    DetailDevoirComponent,
    EditerDevoirComponent,
    LayoutHomeComponent,
    EnteteComponent
  ],
  imports: [
    EtudiantRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
   MatGridListModule,
   MatCardModule

  ]
})
export class EtudiantModule { }