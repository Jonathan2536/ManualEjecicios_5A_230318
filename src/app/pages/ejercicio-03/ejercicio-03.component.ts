import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio03',
  templateUrl: './ejercicio-03.component.html',
  styleUrls: ['./ejercicio-03.component.css']
})
export class Ejercicio03Component {
  city = 'Xicotepec';
  username = 'Jonathan'; // 🔹 Agregamos la propiedad para evitar el error
}
