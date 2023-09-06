import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPanelComponent } from './usuario-panel.component';

describe('UsuarioPanelComponent', () => {
  let component: UsuarioPanelComponent;
  let fixture: ComponentFixture<UsuarioPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioPanelComponent]
    });
    fixture = TestBed.createComponent(UsuarioPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
