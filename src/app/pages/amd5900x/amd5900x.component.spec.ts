import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Amd5900xComponent } from './amd5900x.component';

describe('Amd5900xComponent', () => {
  let component: Amd5900xComponent;
  let fixture: ComponentFixture<Amd5900xComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Amd5900xComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Amd5900xComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
