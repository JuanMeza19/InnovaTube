// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthService } from './core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  template: `
    <app-navbar *ngIf="showNavbar"></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  showNavbar = false;
  
  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe(() => {
      const hiddenRoutes = ['/auth/login', '/auth/register', '/auth/forgot-password'];

      const currentUrl = this.router.url;
      const isHidden = hiddenRoutes.some(path => currentUrl.startsWith(path));

      this.showNavbar = !isHidden && this.authService.isAuthenticated();
    });
  }
}
