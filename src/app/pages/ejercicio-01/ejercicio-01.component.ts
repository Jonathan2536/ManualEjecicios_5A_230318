import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio-01',
  template: `
    <div class="hello-universe">
      <h1>Hola bienvenido</h1>
    </div>
  `,
  styles: [`
    :host {
      color: #a144eb;
    }

    .hello-universe {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh; /* Reduce la altura del div */
      background-color:rgb(253, 236, 0);
    }

    h1 {
      font-size: 4em;
      text-align: center;
    }
  `]
})
export class Ejercicio01Component {

  constructor(private router: Router) {}

  goToPage1() {
    this.router.navigate(['/page1']);
  }
}
