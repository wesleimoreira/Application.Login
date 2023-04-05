// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application
import { RoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})

export class PagesModule { }
