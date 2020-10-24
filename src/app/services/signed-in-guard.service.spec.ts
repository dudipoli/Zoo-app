import { TestBed } from '@angular/core/testing';

import { SignedInGuardService } from './signed-in-guard.service';

describe('SignedInGuardService', () => {
  let service: SignedInGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignedInGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
