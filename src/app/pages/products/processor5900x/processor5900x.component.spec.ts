import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Processor5900xComponent } from './processor5900x.component';

describe('Processor5900xComponent', () => {
  let component: Processor5900xComponent;
  let fixture: ComponentFixture<Processor5900xComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Processor5900xComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Processor5900xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
