import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccortezzaViewComponent } from './accortezza-view.component';

describe('AccortezzaViewComponent', () => {
  let component: AccortezzaViewComponent;
  let fixture: ComponentFixture<AccortezzaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccortezzaViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccortezzaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
