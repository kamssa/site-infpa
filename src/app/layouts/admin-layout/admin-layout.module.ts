import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';
import { AdminLayoutRoutingModule } from './admin-layout-routing.module';


@NgModule({
  declarations: [
    AccueilComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
