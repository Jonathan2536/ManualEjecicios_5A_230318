// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Asegúrate de importar correctamente el archivo

import { AppComponent } from './app/app.component';  // Tu componente principal

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
