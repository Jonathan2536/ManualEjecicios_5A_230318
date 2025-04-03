import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-05',
  templateUrl: './ejercicio-05.component.html',
  styleUrls: ['./ejercicio-05.component.css']
})
export class Ejercicio05Component {
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'Mac' },
    { id: 'lin', name: 'Linux' },
  ];

  users = [
    { id: 0, name: 'Arteaga' },
    { id: 1, name: 'Farias' },
    { id: 2, name: 'Angel' },
    { id: 3, name: 'Paco' },
    { id: 4, name: 'Paco guapo' },
  ];
}
