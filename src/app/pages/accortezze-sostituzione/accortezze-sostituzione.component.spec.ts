import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccortezzeSostituzioneComponent } from './accortezze-sostituzione.component';

describe('AccortezzeSostituzioneComponent', () => {
  let component: AccortezzeSostituzioneComponent;
  let fixture: ComponentFixture<AccortezzeSostituzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccortezzeSostituzioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccortezzeSostituzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
