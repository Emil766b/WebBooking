import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics3070Component } from './graphics3070.component';

describe('Graphics3070Component', () => {
  let component: Graphics3070Component;
  let fixture: ComponentFixture<Graphics3070Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics3070Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphics3070Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
