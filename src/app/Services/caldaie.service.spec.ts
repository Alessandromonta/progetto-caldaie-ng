import { TestBed } from '@angular/core/testing';

import { CaldaieService } from './caldaie.service';

describe('CaldaieService', () => {
  let service: CaldaieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaldaieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
