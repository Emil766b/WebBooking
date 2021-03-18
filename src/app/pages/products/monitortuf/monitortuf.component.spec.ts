import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitortufComponent } from './monitortuf.component';

describe('MonitortufComponent', () => {
  let component: MonitortufComponent;
  let fixture: ComponentFixture<MonitortufComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitortufComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitortufComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
