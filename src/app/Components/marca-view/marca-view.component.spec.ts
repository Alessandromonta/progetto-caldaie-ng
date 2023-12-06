import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaViewComponent } from './marca-view.component';

describe('MarcaViewComponent', () => {
  let component: MarcaViewComponent;
  let fixture: ComponentFixture<MarcaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcaViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarcaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
