import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuazioneViewComponent } from './individuazione-view.component';

describe('IndividuazioneViewComponent', () => {
  let component: IndividuazioneViewComponent;
  let fixture: ComponentFixture<IndividuazioneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividuazioneViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividuazioneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
