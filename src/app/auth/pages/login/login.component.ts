// src/app/auth/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { AuthService } from '../../../core/services/auth.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, LoginFormComponent],
  template: `<app-login-form (login)="onLogin($event)"></app-login-form>`,
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin({ identifier, password }: { identifier: string; password: string }) {
    this.authService.login(identifier, password).subscribe({
      next: () => {
        console.log('¡Sesión iniciada con token simulado!');
        this.router.navigate(['/videos']);
      },
      error: (err) => alert(err.message)
    });
  }
}
