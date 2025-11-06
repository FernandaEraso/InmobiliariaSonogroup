import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  propiedades = [
    {
      titulo: 'Apartamento moderno en el centro',
      descripcion: 'Amplio apartamento con vista panorámica y excelente ubicación.',
      precio: '$320.000.000',
      imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    },
    {
      titulo: 'Casa campestre en Nariño',
      descripcion: 'Casa familiar con jardín y amplios espacios, ideal para descansar.',
      precio: '$450.000.000',
      imagen: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994'
    },
    {
      titulo: 'Apartamento en zona universitaria',
      descripcion: 'Ideal para estudiantes o familias jóvenes. Totalmente nuevo.',
      precio: '$250.000.000',
      imagen: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be'
    }
  ];
}
