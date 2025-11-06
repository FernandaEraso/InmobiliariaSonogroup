import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./modules/auth/components/login/auth.component').then((m) => m.AuthComponent),
    children: [],
  },
  {
    path: 'registrar-propiedad',
    loadComponent: () => import('./components/property-form/property-form.component').then(m => m.PropertyFormComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./components/dashboard-component/dashboard.component').then(m => m.DashboardComponent)
  },
  { path: '**', redirectTo: 'auth/login' },
];

