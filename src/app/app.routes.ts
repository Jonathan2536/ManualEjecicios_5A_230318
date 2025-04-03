import { Routes } from '@angular/router';
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




export const routes: Routes = [
  { path: 'page1', component: Ejercicio01Component, data: { breadcrumb: 'Ejercicio 01' } },
  { path: 'page2', component: Ejercicio02Component, data: { breadcrumb: 'Ejercicio 02' } },
  { path: 'page3', component: Ejercicio03Component, data: { breadcrumb: 'Ejercicio 03' } },
  { path: 'page4', component: Ejercicio04Component, data: { breadcrumb: 'Ejercicio 04' } },
  { path: 'page5', component: Ejercicio05Component, data: { breadcrumb: 'Ejercicio 05' } },
  { path: 'page6', component: Ejercicio06Component, data: { breadcrumb: 'Ejercicio 06' } },
  { path: 'page7', component: Ejercicio07Component, data: { breadcrumb: 'Ejercicio 07' } },
  { path: 'page8', component: Ejercicio08Component, data: { breadcrumb: 'Ejercicio 08' } },
  { path: 'page9', component: Ejercicio09Component, data: { breadcrumb: 'Ejercicio 09' } },
  { path: 'page10', component: Ejercicio10Component, data: {breadcrumb: 'Ejercicio 10' } },
  { path: 'page11', component: Ejercicio11Component, data: {breadcrumb: 'Ejercicio 11' } },
  { path: 'page12', component: Ejercicio12Component, data: {breadcrumb: 'Ejercicio 12' } },
  { path: 'page13', component: Ejercicio13Component, data: {breadcrumb: 'Ejercicio 13' } },
  { path: 'page14', component: Ejercicio14Component, data: {breadcrumb: 'Ejercicio 14' } },
  { path: 'page15', component: Ejercicio15Component, data: {breadcrumb: 'Ejercicio 15' } },
  { path: 'page16', component: Ejercicio16Component, data: {breadcrumb: 'Ejercicio 16' } },
  { path: 'page17', component: Ejercicio17Component, data: {breadcrumb: 'Ejercicio 17' } },
  { path: 'page18', component: Ejercicio18Component, data: {breadcrumb: 'Ejercicio 18' } },
  { path: 'page19', component: Ejercicio19Component, data: {breadcrumb: 'Ejercicio 19' } },



  { path: '**', redirectTo: 'page1' }
];
