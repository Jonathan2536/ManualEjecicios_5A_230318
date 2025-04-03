import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Ejercicio01Component } from './pages/ejercicio-01/ejercicio-01.component';
import { Ejercicio02Component } from './pages/ejercicio-02/ejercicio-02.component';
import { Ejercicio03Component } from './pages/ejercicio-03/ejercicio-03.component';
import { Ejercicio04Component } from './pages/ejercicio-04/ejercicio-04.component';
import { Ejercicio05Component } from './pages/ejercicio-05/ejercicio-05.component';
import { Ejercicio06Component } from './pages/ejercicio-06/ejercicio-06.component';
import { Ejercicio07Component } from './pages/ejercicio-07/ejercicio-07.component';
import { Ejercicio08Component } from './pages/ejercicio-08/ejercicio-08.component';
import { Ejercicio09Component } from './pages/ejercicio-09/ejercicio-09.component';
import { Ejercicio10Component } from './pages/ejercicio-10/ejercicio-10.component';
import { Ejercicio11Component } from './pages/ejercicio-11/ejercicio-11.component';
import { Ejercicio12Component } from './pages/ejercicio-12/ejercicio-12.component';
import { Ejercicio13Component } from './pages/ejercicio-13/ejercicio-13.component';
import { Ejercicio14Component } from './pages/ejercicio-14/ejercicio-14.component';
import { Ejercicio15Component } from './pages/ejercicio-15/ejercicio-15.component';
import { Ejercicio16Component } from './pages/ejercicio-16/ejercicio-16.component';
import { Ejercicio17Component } from './pages/ejercicio-17/ejercicio-17.component'; 
import { Ejercicio18Component } from './pages/ejercicio-18/ejercicio-18.component';
import { Ejercicio19Component } from './pages/ejercicio-19/ejercicio-19.component';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// Importa los demás ejercicios

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', redirectTo: '/page1', pathMatch: 'full' },
      { path: 'page1', component: Ejercicio01Component },
      { path: 'page2', component: Ejercicio02Component },
      { path: 'page3', component: Ejercicio03Component },
      { path: 'page4', component: Ejercicio04Component },
      { path: 'page5', component: Ejercicio05Component },
      { path: 'page6', component: Ejercicio06Component },
      { path: 'page7', component: Ejercicio07Component },
      { path: 'page8', component: Ejercicio08Component },
      { path: 'page9', component: Ejercicio09Component },
      { path: 'page10', component: Ejercicio10Component },
      { path: 'page11', component: Ejercicio11Component },
      { path: 'page12', component: Ejercicio12Component },
      { path: 'page13', component: Ejercicio13Component },
      { path: 'page14', component: Ejercicio14Component },
      { path: 'page15', component: Ejercicio15Component },
      { path: 'page16', component: Ejercicio16Component },
      { path: 'page17', component: Ejercicio17Component },
      { path: 'page18', component: Ejercicio18Component },
      { path: 'page19', component: Ejercicio19Component },

      // Agrega las rutas restantes para los ejercicios
      { path: '**', redirectTo: '/page1' }
    ]), provideAnimationsAsync()
  ]
};
