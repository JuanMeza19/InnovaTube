import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { NgxCaptchaModule, InvisibleReCaptchaComponent } from 'ngx-captcha';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    RouterModule,
  ],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  @ViewChild('captchaElem') captchaElem!: InvisibleReCaptchaComponent;

  registerForm: FormGroup;
  siteKey: string = '6LfRmz4rAAAAAB7-HKxgq9MmSl5fWSvwyPyRG7ta';

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      recaptcha: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup) {
    return group.get('password')?.value === group.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.auth.register(email, password)
        .then((result) => {
          alert('✅ Cuenta creada con éxito, Revice su correo electronico, falta validacion',);
          this.router.navigate(['/auth/login']);
          console.log('Usuario:', result);
        })
        .catch((err) => {
          alert('❌ Error: ' + err.message);
        });
    }
  }

  handleCaptchaSuccess(token: string): void {
    this.registerForm.get('recaptcha')?.setValue(token);
  }
}

