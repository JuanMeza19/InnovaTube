import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

  @Component({
    selector: 'app-login-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() login = new EventEmitter<{ identifier: string; password: string }>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      identifier: ['', Validators.required], // correo o usuario
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.login.emit(this.form.value);
    }
  }
}
