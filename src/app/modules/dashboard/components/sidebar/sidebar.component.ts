import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  menuItems = [
    { label: 'Inicio', icon: '🏠', route: '/dashboard' },
    { label: 'Inmuebles', icon: '🏡', route: '/dashboard/propiedades' },
    { label: 'Usuarios', icon: '👥', route: '/dashboard/usuarios' },
    { label: 'Reportes', icon: '📊', route: '/dashboard/reportes' },
  ];

}

