import { TestBed } from '@angular/core/testing';

import { UtentiCaldaieService } from './utenti-caldaie.service';

describe('UtentiCaldaieService', () => {
  let service: UtentiCaldaieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtentiCaldaieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
