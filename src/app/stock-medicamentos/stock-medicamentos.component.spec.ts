import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMedicamentosComponent } from './stock-medicamentos.component';

describe('StockMedicamentosComponent', () => {
  let component: StockMedicamentosComponent;
  let fixture: ComponentFixture<StockMedicamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockMedicamentosComponent]
    });
    fixture = TestBed.createComponent(StockMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
