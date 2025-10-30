import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-auth',
  imports: [ButtonModule, CardModule, PasswordModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  //*@Inject
  private _fb = inject(FormBuilder);

  //*Formulario
  form: FormGroup;
  loading = false;

  constructor() {
    this.form = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit(): void {
    if (this.form.invalid) return;
    this.loading = true;
    const { email, password } = this.form.value;
    console.log(email, password);
  }
}
