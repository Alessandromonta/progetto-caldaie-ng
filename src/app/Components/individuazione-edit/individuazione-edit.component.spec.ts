import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuazioneEditComponent } from './individuazione-edit.component';

describe('IndividuazioneEditComponent', () => {
  let component: IndividuazioneEditComponent;
  let fixture: ComponentFixture<IndividuazioneEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividuazioneEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividuazioneEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
