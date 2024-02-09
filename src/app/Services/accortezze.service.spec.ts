import { TestBed } from '@angular/core/testing';
import { AccortezzeService } from './accortezze.service';

describe('AccortezzeService', () => {
  let service: AccortezzeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccortezzeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
