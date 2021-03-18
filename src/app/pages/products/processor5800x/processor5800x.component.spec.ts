import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Processor5800xComponent } from './processor5800x.component';

describe('Processor5800xComponent', () => {
  let component: Processor5800xComponent;
  let fixture: ComponentFixture<Processor5800xComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Processor5800xComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Processor5800xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
