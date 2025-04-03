import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() userName: string = '';
  @Output() logout: EventEmitter<void> = new EventEmitter(); // Evento de logout
  isSidebarVisible = true;

  constructor(private router: Router) {} // Inyectamos Router en el constructor

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  onLogout() {
    this.logout.emit();
  }

  // Aquí agregamos la función para navegar a la página 1
  goToPage1() {
    this.router.navigate(['/page1']);
  }
  goToPage2() {
    this.router.navigate(['/page2']);
  }
  goToPage3() {
    this.router.navigate(['/page3']);
  }
  goToPage4() {
    this.router.navigate(['/page4']);
  }
  goToPage5() {
    this.router.navigate(['/page5']);
  }
  goToPage6() {
    this.router.navigate(['/page6']);
  }
  goToPage7() {
    this.router.navigate(['/page7']);
  }
  goToPage8() {
    this.router.navigate(['/page8']);
  }
  goToPage9() {
    this.router.navigate(['/page9']);
  }
  goToPage10() {
    this.router.navigate(['/page10']);
  }
  goToPage11() {
    this.router.navigate(['/page11']);
  }



  // Apartir de aqui son las tablas

  
  goToPage12() {  
    this.router.navigate(['/page12']);
  }
  goToPage13() {
    this.router.navigate(['/page13']);
  }
  goToPage14() {
    this.router.navigate(['/page14']);
  }
  goToPage15() {
    this.router.navigate(['/page15']);
  }



  // Apartir de aqui van las graficas



  goToPage16() {
    this.router.navigate(['/page16']);
  }
  goToPage17(){
    this.router.navigate(['/page17']);
  }
  goToPage18(){
    this.router.navigate(['/page18']);
  }
  goToPage19(){
    this.router.navigate(['/page19']);
  }
}
