import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-06',
  templateUrl: './ejercicio-06.component.html',
  styleUrls: ['./ejercicio-06.component.css']
})
export class Ejercicio06Component {
  isEditable = false; // Inicialmente deshabilitado

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }
}
