import { TestBed } from '@angular/core/testing';

import { IndividuazioniService } from './individuazioni.service';

describe('IndividuazioniService', () => {
  let service: IndividuazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividuazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
