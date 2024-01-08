import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroreEditComponent } from './errore-edit.component';

describe('ErroreEditComponent', () => {
  let component: ErroreEditComponent;
  let fixture: ComponentFixture<ErroreEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroreEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErroreEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
