import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Graphics6800xtComponent } from './graphics6800xt.component';

describe('Graphics6800xtComponent', () => {
  let component: Graphics6800xtComponent;
  let fixture: ComponentFixture<Graphics6800xtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Graphics6800xtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Graphics6800xtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
