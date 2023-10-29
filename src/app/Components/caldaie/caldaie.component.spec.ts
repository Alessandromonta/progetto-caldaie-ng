import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaldaieComponent } from './caldaie.component';

describe('CaldaieComponent', () => {
  let component: CaldaieComponent;
  let fixture: ComponentFixture<CaldaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaldaieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaldaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
