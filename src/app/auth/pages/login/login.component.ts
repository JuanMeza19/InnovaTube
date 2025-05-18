// src/app/auth/pages/login/login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, LoginFormComponent],
  template: `<app-login-form (login)="onLogin($event)"></app-login-form>`,
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  async onLogin({ email, password }: { email: string; password: string }) {
    try {
      await this.authService.login(email, password);
      this.router.navigate(['/videos']);
    } catch (err) {
      alert('Login inválido');
    }
  } 
}
