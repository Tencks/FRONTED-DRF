import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMLocalComponent } from './stock-mlocal.component';

describe('StockMLocalComponent', () => {
  let component: StockMLocalComponent;
  let fixture: ComponentFixture<StockMLocalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockMLocalComponent]
    });
    fixture = TestBed.createComponent(StockMLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
