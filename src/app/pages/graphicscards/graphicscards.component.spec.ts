import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicscardsComponent } from './graphicscards.component';

describe('GraphicscardsComponent', () => {
  let component: GraphicscardsComponent;
  let fixture: ComponentFixture<GraphicscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicscardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
