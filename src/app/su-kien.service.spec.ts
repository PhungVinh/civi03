import { TestBed } from '@angular/core/testing';

import { SuKienService } from './su-kien.service';

describe('SuKienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuKienService = TestBed.get(SuKienService);
    expect(service).toBeTruthy();
  });
});
