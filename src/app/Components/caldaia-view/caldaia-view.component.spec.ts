import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaldaiaViewComponent } from './caldaia-view.component';

describe('CaldaiaViewComponent', () => {
  let component: CaldaiaViewComponent;
  let fixture: ComponentFixture<CaldaiaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaldaiaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaldaiaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
