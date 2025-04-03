import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common'; // Necesario para las directivas de Angular como *ngFor

@Component({
  selector: 'app-ejercicio-13',
  standalone: true, // Componente independiente
  imports: [
    CommonModule,   // Asegúrate de importar CommonModule
    MatTableModule  // Asegúrate de importar MatTableModule
  ],
  templateUrl: './ejercicio-13.component.html',
  styleUrls: ['./ejercicio-13.component.css']
})
export class Ejercicio13Component implements OnInit {
    // Datos para la tabla (40 personas)
    personas = [
      { nombre: 'Juan', primerApellido: 'Pérez', segundoApellido: 'González' },
      { nombre: 'Ana', primerApellido: 'López', segundoApellido: 'Martínez' },
      { nombre: 'Carlos', primerApellido: 'Gómez', segundoApellido: 'Sánchez' },
      { nombre: 'Lucía', primerApellido: 'Fernández', segundoApellido: 'Romero' },
      { nombre: 'Pedro', primerApellido: 'Díaz', segundoApellido: 'Morales' },
      { nombre: 'María', primerApellido: 'Gutiérrez', segundoApellido: 'Alvarez' },
      { nombre: 'José', primerApellido: 'Jiménez', segundoApellido: 'Hernández' },
      { nombre: 'Marta', primerApellido: 'Vázquez', segundoApellido: 'Cruz' },
      { nombre: 'Francisco', primerApellido: 'Mora', segundoApellido: 'Pérez' },
      { nombre: 'David', primerApellido: 'Ruiz', segundoApellido: 'López' },
      { nombre: 'Sofía', primerApellido: 'Torres', segundoApellido: 'Martínez' },
      { nombre: 'Antonio', primerApellido: 'García', segundoApellido: 'Rodríguez' },
      { nombre: 'Isabel', primerApellido: 'Fernández', segundoApellido: 'Sánchez' },
      { nombre: 'Raúl', primerApellido: 'Ramírez', segundoApellido: 'González' },
      { nombre: 'Laura', primerApellido: 'Moreno', segundoApellido: 'López' },
      { nombre: 'Javier', primerApellido: 'Navarro', segundoApellido: 'García' },
      { nombre: 'Carmen', primerApellido: 'Hernández', segundoApellido: 'Pérez' },
      { nombre: 'Luis', primerApellido: 'Álvarez', segundoApellido: 'Fernández' },
      { nombre: 'Rosa', primerApellido: 'Sánchez', segundoApellido: 'García' },
      { nombre: 'Marcos', primerApellido: 'Gómez', segundoApellido: 'Torres' },
      { nombre: 'Beatriz', primerApellido: 'Martínez', segundoApellido: 'Ramírez' },
      { nombre: 'José Luis', primerApellido: 'Vázquez', segundoApellido: 'Pérez' },
      { nombre: 'Patricia', primerApellido: 'Jiménez', segundoApellido: 'Morales' },
      { nombre: 'Carlos Alberto', primerApellido: 'López', segundoApellido: 'Mora' },
      { nombre: 'Raquel', primerApellido: 'Torres', segundoApellido: 'González' },
      { nombre: 'Francisco Javier', primerApellido: 'Morales', segundoApellido: 'Sánchez' },
      { nombre: 'Sergio', primerApellido: 'Ramírez', segundoApellido: 'Torres' },
      { nombre: 'Ana María', primerApellido: 'Martínez', segundoApellido: 'García' },
      { nombre: 'Juan Carlos', primerApellido: 'Fernández', segundoApellido: 'Rodríguez' },
      { nombre: 'Mercedes', primerApellido: 'López', segundoApellido: 'Navarro' },
      { nombre: 'Jorge', primerApellido: 'Ramírez', segundoApellido: 'Hernández' },
      { nombre: 'Susana', primerApellido: 'González', segundoApellido: 'Álvarez' },
      { nombre: 'Miguel', primerApellido: 'Torres', segundoApellido: 'González' },
      { nombre: 'Raúl', primerApellido: 'Sánchez', segundoApellido: 'Martínez' },
      { nombre: 'Adriana', primerApellido: 'Vázquez', segundoApellido: 'García' },
      { nombre: 'Antonio José', primerApellido: 'Rodríguez', segundoApellido: 'Pérez' },
      { nombre: 'Sara', primerApellido: 'Moreno', segundoApellido: 'Torres' },
      { nombre: 'Alberto', primerApellido: 'García', segundoApellido: 'Martínez' },
      { nombre: 'Lucía María', primerApellido: 'Jiménez', segundoApellido: 'Ramírez' },
      { nombre: 'Víctor', primerApellido: 'Navarro', segundoApellido: 'Hernández' },
      { nombre: 'Eva', primerApellido: 'Torres', segundoApellido: 'Vázquez' }
    ];

    // Columnas que se mostrarán en la tabla
    displayedColumns: string[] = ['nombre', 'primerApellido', 'segundoApellido'];

    constructor() {}

    ngOnInit(): void {}
  }
