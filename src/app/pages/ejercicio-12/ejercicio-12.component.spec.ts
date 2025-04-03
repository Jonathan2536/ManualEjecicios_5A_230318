import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio12Component } from './ejercicio-12.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Ejercicio12Component', () => {
  let component: Ejercicio12Component;
  let fixture: ComponentFixture<Ejercicio12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule], // Para manejar las rutas en las pruebas
      declarations: [Ejercicio12Component] // Se declara el componente
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav')?.textContent).toContain('Home');
    expect(compiled.querySelector('nav')?.textContent).toContain('User');
  });
});
