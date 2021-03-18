import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amd6800xtComponent } from './amd6800xt.component';

describe('Amd6800xtComponent', () => {
  let component: Amd6800xtComponent;
  let fixture: ComponentFixture<Amd6800xtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Amd6800xtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Amd6800xtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
