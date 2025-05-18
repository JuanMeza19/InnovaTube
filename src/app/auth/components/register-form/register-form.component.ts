import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  recaptchaToken: string | null = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
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

  onRegister() {
    if (this.registerForm.valid) {
      const payload = {
        ...this.registerForm.value,
        recaptchaToken: this.recaptchaToken
      };
      console.log('Registro enviado:', payload);
    }
  }

  onCaptchaResolved(token: string) {
    this.recaptchaToken = token;
    this.registerForm.get('recaptcha')?.setValue(token);
  }
}
