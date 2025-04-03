import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio09',
  templateUrl: './ejercicio-09.component.html',
  styleUrls: ['./ejercicio-09.component.css']
})
export class Ejercicio09Component {
  counter: number = 0; // Inicializa el contador en 0

  addItem() {
    this.counter++; // Incrementa en 1
  }
}
