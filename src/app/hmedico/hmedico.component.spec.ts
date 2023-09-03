import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmedicoComponent } from './hmedico.component';

describe('HmedicoComponent', () => {
  let component: HmedicoComponent;
  let fixture: ComponentFixture<HmedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HmedicoComponent]
    });
    fixture = TestBed.createComponent(HmedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
