import { TestBed } from '@angular/core/testing';

import { ErroriService } from './errori.service';

describe('ErroriService', () => {
  let service: ErroriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErroriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
