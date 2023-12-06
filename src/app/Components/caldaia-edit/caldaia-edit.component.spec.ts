import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaldaiaEditComponent } from './caldaia-edit.component';

describe('CaldaiaEditComponent', () => {
  let component: CaldaiaEditComponent;
  let fixture: ComponentFixture<CaldaiaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaldaiaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaldaiaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
