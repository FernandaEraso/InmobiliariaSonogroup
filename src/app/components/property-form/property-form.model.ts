export interface PropertyForm {
  titulo: string;
  tipoInmueble: string;
  tipoOperacion: string;
  estadoConservacion: string;
  valor: number | null;
  moneda: string;
  direccion: string;
  ciudad: string;
  barrio: string;
  departamento: string;
  latitud?: number;
  longitud?: number;
  dormitorios?: number;
  banos?: number;
  superficie?: number;
  caracteristicas: { [key: string]: boolean };
  serviciosPublicos: { [key: string]: boolean };
  descripcion: string;
  fotos: File[];
  [key: string]: any; // Para campos dinámicos por tipo
}
