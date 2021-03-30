import { TestBed } from '@angular/core/testing';

import { GrandtotalService } from './grandtotal.service';

describe('GrandtotalService', () => {
  let service: GrandtotalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrandtotalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
