import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicamentoComponent } from './add-medicamento.component';

describe('AddMedicamentoComponent', () => {
  let component: AddMedicamentoComponent;
  let fixture: ComponentFixture<AddMedicamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMedicamentoComponent]
    });
    fixture = TestBed.createComponent(AddMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
