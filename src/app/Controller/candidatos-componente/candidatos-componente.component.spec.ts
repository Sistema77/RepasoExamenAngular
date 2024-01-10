import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosComponenteComponent } from './candidatos-componente.component';

describe('CandidatosComponenteComponent', () => {
  let component: CandidatosComponenteComponent;
  let fixture: ComponentFixture<CandidatosComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatosComponenteComponent]
    });
    fixture = TestBed.createComponent(CandidatosComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
