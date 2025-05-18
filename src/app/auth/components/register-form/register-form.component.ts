import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { NgxCaptchaModule, InvisibleReCaptchaComponent } from 'ngx-captcha';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  @ViewChild('captchaElem') captchaElem!: InvisibleReCaptchaComponent;

  registerForm: FormGroup;
  siteKey: string = '6LfRmz4rAAAAAB7-HKxgq9MmSl5fWSvwyPyRG7ta'; // 🔑 Usa la clave generada en https://www.google.com/recaptcha/admin

  constructor(private fb: FormBuilder, private auth: AuthService) {
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
          alert('✅ Cuenta creada con éxito');
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

