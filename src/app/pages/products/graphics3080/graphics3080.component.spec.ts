import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics3080Component } from './graphics3080.component';

describe('Graphics3080Component', () => {
  let component: Graphics3080Component;
  let fixture: ComponentFixture<Graphics3080Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics3080Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphics3080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
