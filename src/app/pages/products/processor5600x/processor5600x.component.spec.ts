import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Processor5600xComponent } from './processor5600x.component';

describe('Processor5600xComponent', () => {
  let component: Processor5600xComponent;
  let fixture: ComponentFixture<Processor5600xComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Processor5600xComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Processor5600xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
