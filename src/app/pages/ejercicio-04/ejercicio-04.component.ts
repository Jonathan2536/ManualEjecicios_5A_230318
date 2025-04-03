import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ejercicio-04',
  templateUrl: './ejercicio-04.component.html',
  styleUrls: ['./ejercicio-04.component.css'],
  encapsulation: ViewEncapsulation.None  // Desactiva la encapsulación de estilos
})
export class Ejercicio04Component {
  isServerRunning = false;
  isLoggedIn = false;
}
