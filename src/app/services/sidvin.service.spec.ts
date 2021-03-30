import { TestBed } from '@angular/core/testing';

import { SidvinService } from './sidvin.service';

describe('SidvinService', () => {
  let service: SidvinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidvinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
