import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccortezzeComponent } from './accortezze.component';

describe('AccortezzeComponent', () => {
  let component: AccortezzeComponent;
  let fixture: ComponentFixture<AccortezzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccortezzeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccortezzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
