import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuazioneGuastiComponent } from './individuazione-guasti.component';

describe('IndividuazioneGuastiComponent', () => {
  let component: IndividuazioneGuastiComponent;
  let fixture: ComponentFixture<IndividuazioneGuastiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividuazioneGuastiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividuazioneGuastiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
