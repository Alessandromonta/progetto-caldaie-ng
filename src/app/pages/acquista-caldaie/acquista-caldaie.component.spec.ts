import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistaCaldaieComponent } from './acquista-caldaie.component';

describe('AcquistaCaldaieComponent', () => {
  let component: AcquistaCaldaieComponent;
  let fixture: ComponentFixture<AcquistaCaldaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcquistaCaldaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcquistaCaldaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
