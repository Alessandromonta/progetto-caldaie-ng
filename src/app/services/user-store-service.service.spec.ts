import { TestBed } from '@angular/core/testing';

import { UserStoreServiceService } from './user-store-service.service';

describe('UserStoreServiceService', () => {
  let service: UserStoreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStoreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
