// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Aplicação
import { HeaderComponent } from './header/header.component';
import { FormRegisterComponent } from './form-register/form-register.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FormRegisterComponent,  
  ],
  exports:[
    HeaderComponent,
    FormRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class SharedModule { }