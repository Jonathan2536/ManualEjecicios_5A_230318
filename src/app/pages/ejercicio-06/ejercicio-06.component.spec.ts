import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio06Component } from './ejercicio-06.component';

describe('Ejercicio06Component', () => {
  let component: Ejercicio06Component;
  let fixture: ComponentFixture<Ejercicio06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ejercicio06Component] // Corregido de 'imports' a 'declarations'
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isEditable when toggleEdit() is called', () => {
    expect(component.isEditable).toBeFalse(); // Inicialmente debería ser false
    component.toggleEdit();
    expect(component.isEditable).toBeTrue(); // Después de llamar toggleEdit(), debería ser true
    component.toggleEdit();
    expect(component.isEditable).toBeFalse(); // Llamar otra vez debería volverlo a false
  });
});
