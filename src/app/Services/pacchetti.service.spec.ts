import { TestBed } from '@angular/core/testing';

import { PacchettiService } from './pacchetti.service';

describe('PacchettiService', () => {
  let service: PacchettiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacchettiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
