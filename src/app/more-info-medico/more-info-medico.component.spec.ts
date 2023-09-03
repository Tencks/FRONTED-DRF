import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoMedicoComponent } from './more-info-medico.component';

describe('MoreInfoMedicoComponent', () => {
  let component: MoreInfoMedicoComponent;
  let fixture: ComponentFixture<MoreInfoMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInfoMedicoComponent]
    });
    fixture = TestBed.createComponent(MoreInfoMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
