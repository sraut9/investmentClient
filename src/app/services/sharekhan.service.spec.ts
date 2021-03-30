import { TestBed } from '@angular/core/testing';

import { SharekhanService } from './sharekhan.service';

describe('SharekhanService', () => {
  let service: SharekhanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharekhanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
