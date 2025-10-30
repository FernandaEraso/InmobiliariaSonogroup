import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/auth.component').then((m) => m.AuthComponent),
    children: [],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },
  { path: '**', redirectTo: 'login' },
];
