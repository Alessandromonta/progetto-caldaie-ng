import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacchettiComponent } from './pacchetti.component';

describe('PacchettiComponent', () => {
  let component: PacchettiComponent;
  let fixture: ComponentFixture<PacchettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacchettiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacchettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
