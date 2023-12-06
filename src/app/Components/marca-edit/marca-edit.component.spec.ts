import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaEditComponent } from './marca-edit.component';

describe('MarcaEditComponent', () => {
  let component: MarcaEditComponent;
  let fixture: ComponentFixture<MarcaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
