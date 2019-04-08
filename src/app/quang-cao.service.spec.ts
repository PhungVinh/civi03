import { TestBed } from '@angular/core/testing';

import { QuangCaoService } from './quang-cao.service';

describe('QuangCaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuangCaoService = TestBed.get(QuangCaoService);
    expect(service).toBeTruthy();
  });
});
