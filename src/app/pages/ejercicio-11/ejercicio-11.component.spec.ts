import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio11Component } from './ejercicio-11.component';
import { NgOptimizedImage } from '@angular/common';

describe('Ejercicio11Component', () => {
  let component: Ejercicio11Component;
  let fixture: ComponentFixture<Ejercicio11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio11Component, NgOptimizedImage]
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have username as "youngTech"', () => {
    expect(component.username).toBe('youngTech');
  });

  it('should have userAvatarUrl as "/assets/avatar.png"', () => {
    expect(component.userAvatarUrl).toBe('/assets/avatar.png');
  });

  it('should render the Angular logo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')?.getAttribute('alt')).toContain('Angular logo');
  });
});
