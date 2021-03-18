import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics6800Component } from './graphics6800.component';

describe('Graphics6800Component', () => {
  let component: Graphics6800Component;
  let fixture: ComponentFixture<Graphics6800Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics6800Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphics6800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
