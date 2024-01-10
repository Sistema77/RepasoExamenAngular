import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuestoDisponiblesComponeneteComponent } from './puesto-disponibles-componenete.component';

describe('PuestoDisponiblesComponeneteComponent', () => {
  let component: PuestoDisponiblesComponeneteComponent;
  let fixture: ComponentFixture<PuestoDisponiblesComponeneteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuestoDisponiblesComponeneteComponent]
    });
    fixture = TestBed.createComponent(PuestoDisponiblesComponeneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
