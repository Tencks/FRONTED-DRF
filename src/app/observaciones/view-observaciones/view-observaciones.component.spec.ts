import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewObservacionesComponent } from './view-observaciones.component';

describe('ViewObservacionesComponent', () => {
  let component: ViewObservacionesComponent;
  let fixture: ComponentFixture<ViewObservacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewObservacionesComponent]
    });
    fixture = TestBed.createComponent(ViewObservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
