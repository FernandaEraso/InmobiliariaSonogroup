import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-auth',
  imports: [ButtonModule, CardModule, PasswordModule, ReactiveFormsModule, RouterLink],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  //*@Inject
  private _fb = inject(FormBuilder);
  private _router = inject(Router);

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
    
    // Simular autenticación (aquí deberías llamar a tu servicio de autenticación)
    setTimeout(() => {
      console.log('Login exitoso:', email, password);
      this.loading = false;
      
      // Redirigir al dashboard después del login exitoso
      this._router.navigate(['/dashboard']);
    }, 1000);
  }
}
