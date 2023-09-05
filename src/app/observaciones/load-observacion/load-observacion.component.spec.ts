import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadObservacionComponent } from './load-observacion.component';

describe('LoadObservacionComponent', () => {
  let component: LoadObservacionComponent;
  let fixture: ComponentFixture<LoadObservacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadObservacionComponent]
    });
    fixture = TestBed.createComponent(LoadObservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
