import { TestBed } from '@angular/core/testing';

import { HideProfileService } from './hide-profile.service';

describe('HideProfileService', () => {
  let service: HideProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
