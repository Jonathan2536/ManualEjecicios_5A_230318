import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ejercicio-11',
  standalone: true,
  templateUrl: './ejercicio-11.component.html',
  styleUrls: ['./ejercicio-11.component.css'],
  imports: [NgOptimizedImage] // Importación del módulo optimizado
})
export class Ejercicio11Component {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
  userAvatarUrl = '/assets/avatar.png';
  userAvatarAlt = 'User avatar';
}
