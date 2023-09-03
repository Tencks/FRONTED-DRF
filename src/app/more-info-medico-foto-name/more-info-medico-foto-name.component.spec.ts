import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoMedicoFotoNameComponent } from './more-info-medico-foto-name.component';

describe('MoreInfoMedicoFotoNameComponent', () => {
  let component: MoreInfoMedicoFotoNameComponent;
  let fixture: ComponentFixture<MoreInfoMedicoFotoNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoreInfoMedicoFotoNameComponent]
    });
    fixture = TestBed.createComponent(MoreInfoMedicoFotoNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
