import { Component } from '@angular/core';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RegisterFormComponent],
  template: `<app-register-form></app-register-form>`,

})
export class RegisterPageComponent {

}
