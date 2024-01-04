import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioCaldaiaComponent } from './dettaglio-caldaia.component';

describe('DettaglioCaldaiaComponent', () => {
  let component: DettaglioCaldaiaComponent;
  let fixture: ComponentFixture<DettaglioCaldaiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioCaldaiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettaglioCaldaiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
