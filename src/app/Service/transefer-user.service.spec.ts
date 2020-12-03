import { TestBed } from '@angular/core/testing';

import { TranseferUserService } from './transefer-user.service';

describe('TranseferUserService', () => {
  let service: TranseferUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranseferUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
