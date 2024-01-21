import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroreViewComponent } from './errore-view.component';

describe('ErroreViewComponent', () => {
  let component: ErroreViewComponent;
  let fixture: ComponentFixture<ErroreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErroreViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErroreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
