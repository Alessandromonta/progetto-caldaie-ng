import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividuazioniComponent } from './individuazioni.component';

describe('MarcheComponent', () => {
  let component: IndividuazioniComponent;
  let fixture: ComponentFixture<IndividuazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividuazioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividuazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
