import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Monitorc27Component } from './monitorc27.component';

describe('Monitorc27Component', () => {
  let component: Monitorc27Component;
  let fixture: ComponentFixture<Monitorc27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Monitorc27Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Monitorc27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
