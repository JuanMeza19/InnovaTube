import { Injectable } from "@angular/core";
import { delay, Observable, of, tap, throwError } from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USERNAME_KEY = 'auth_username';

  private mockUser = {
    username: 'admin',
    email: 'admin@demo.com',
    password: '123456',
    token: 'FAKE_TOKEN_123'
  };

  login(identifier: string, password: string): Observable<string> {
    const valid =
      (identifier === this.mockUser.username || identifier === this.mockUser.email) &&
      password === this.mockUser.password;

    if (!valid) {
      return throwError(() => new Error('Credenciales inválidas')).pipe(delay(500));
    }

    return of(this.mockUser.token).pipe(
      delay(1000),
      tap(() => {
        localStorage.setItem(this.TOKEN_KEY, this.mockUser.token);
        localStorage.setItem(this.USERNAME_KEY, this.mockUser.username);
      })
    );
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USERNAME_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getUsername(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }
}
