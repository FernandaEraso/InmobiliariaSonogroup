import { Component } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {
  TipoOperacion,
  TipoInmueble,
  EstadoConservacion,
  ZonaLocal,
} from './enums';
import { PropertyForm } from './property-form.model';

@Component({
  selector: 'app-property-form',
  standalone: true,
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.css'], 
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatOptionModule,
    TitleCasePipe,
  ],
})
export class PropertyFormComponent {
  // Enums disponibles en template
  tipoOperacion = TipoOperacion;
  tipoInmueble = TipoInmueble;
  estadoConservacion = EstadoConservacion;
  zonaLocal = ZonaLocal;

  monedas = ['COP', 'USD'];

  caracteristicasDisponibles = [
    'garage',
    'piscina',
    'cocina integrada',
    'ascensor',
    'jardín',
    'quincho',
    'vestidor',
    'lavadero',
    'terraza',
    'balcón',
    'aire acondicionado',
    'calefacción',
    'portero 24hs',
    'seguridad 24hs',
  ];
  serviciosDisponibles = [
    'energía',
    'agua',
    'gas',
    'alcantarillado',
  ];

  maxFotos = 5;

  datos: PropertyForm = {
    titulo: '',
    tipoInmueble: '',
    tipoOperacion: '',
    estadoConservacion: '',
    valor: null,
    moneda: 'COP',
    direccion: '',
    ciudad: '',
    barrio: '',
    departamento: '',
    caracteristicas: {},
    dormitorios: undefined,
    banos: undefined,
    superficie: undefined,
    serviciosPublicos: {},
    descripcion: '',
    fotos: [],
  };

  onTipoInmuebleChange() {
    // Resetear características y servicios al cambiar tipo de inmueble
  }

  onFotoSubida(event: any) {
    const files: File[] = Array.from(event.target.files) as File[];
    if (files.length + this.datos.fotos.length <= this.maxFotos) {
      this.datos.fotos = this.datos.fotos.concat(files);
    }
    event.target.value = '';
  }

  quitarFoto(idx: number) {
    this.datos.fotos.splice(idx, 1);
  }

  onGuardarBorrador() {
    // lógica simulada de borrador
    alert('Propiedad guardada como borrador');
  }

  onPublicar() {
    // lógica simulada de publicación
    alert('Propiedad publicada exitosamente');
  }
}
