import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistaPacchettiComponent } from './acquista-pacchetti.component';

describe('AcquistaPacchettiComponent', () => {
  let component: AcquistaPacchettiComponent;
  let fixture: ComponentFixture<AcquistaPacchettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcquistaPacchettiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcquistaPacchettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
