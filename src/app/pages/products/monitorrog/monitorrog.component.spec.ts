import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorrogComponent } from './monitorrog.component';

describe('MonitorrogComponent', () => {
  let component: MonitorrogComponent;
  let fixture: ComponentFixture<MonitorrogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorrogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorrogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
