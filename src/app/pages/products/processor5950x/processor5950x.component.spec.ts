import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Processor5950xComponent } from './processor5950x.component';

describe('Processor5950xComponent', () => {
  let component: Processor5950xComponent;
  let fixture: ComponentFixture<Processor5950xComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Processor5950xComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Processor5950xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
