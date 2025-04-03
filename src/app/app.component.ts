import { Component, OnInit, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageContainerComponent } from "./components/page-container/page-container.component";
import { LoginComponent } from './login/login.component'; // Importar LoginComponent
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';  // Importar isPlatformBrowser
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    NavbarComponent,
    PageContainerComponent,
    LoginComponent // Incluir LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ManualEjercicios_Angular_230318';
  isLoggedIn: boolean = false; // Agregar estado de login
  userName: string = ''; // Agregar nombre de usuario

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Verificar si estamos en el navegador antes de acceder a localStorage
    if (isPlatformBrowser(this.platformId)) {
      // Recuperar el estado de login y el nombre de usuario desde localStorage
      const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
      const storedUserName = localStorage.getItem('userName');
      this.isLoggedIn = storedIsLoggedIn === 'true';
      this.userName = storedUserName || '';
    }
  }

  onLoginSuccess(name: string) {
    this.isLoggedIn = true;
    this.userName = name;
    // Guardar el estado de login y el nombre de usuario en localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', name);
    }
  }

  onLogout() {
    this.isLoggedIn = false;
    this.userName = '';
    // Limpiar el estado de login y el nombre de usuario en localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
    }
  }
}
