import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccortezzaEditComponent } from './accortezza-edit.component';

describe('AccortezzaEditComponent', () => {
  let component: AccortezzaEditComponent;
  let fixture: ComponentFixture<AccortezzaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccortezzaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccortezzaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
