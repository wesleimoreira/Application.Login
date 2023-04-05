import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})

export class FormRegisterComponent {

  @Input() btnForm!: string;


}
