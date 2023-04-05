// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Application
import { RoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})

export class PagesModule { }
