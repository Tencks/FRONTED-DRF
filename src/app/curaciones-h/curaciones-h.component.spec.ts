import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuracionesHComponent } from './curaciones-h.component';

describe('CuracionesHComponent', () => {
  let component: CuracionesHComponent;
  let fixture: ComponentFixture<CuracionesHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuracionesHComponent]
    });
    fixture = TestBed.createComponent(CuracionesHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
