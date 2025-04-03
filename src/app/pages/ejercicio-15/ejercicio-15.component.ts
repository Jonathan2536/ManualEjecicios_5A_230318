import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-ejercicio-15',
  templateUrl: './ejercicio-15.component.html',
  styleUrls: ['./ejercicio-15.component.css']
})
export class Ejercicio15Component implements OnInit {
  personas: any[] = []; // Esta propiedad guardará los datos que recibimos del backend

  constructor(private personasService: PersonasService) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener las personas
    this.personasService.getPersonas().subscribe(
      (data) => {
        this.personas = data; // Guardamos los datos en la propiedad personas
      },
      (error) => {
        console.error('Error al obtener personas', error); // En caso de error
      }
    );
  }
}
