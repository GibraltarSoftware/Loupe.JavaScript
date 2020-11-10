import { TestBed } from '@angular/core/testing';

import { LoupeService } from './loupe.service';

describe('LoupeAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoupeService = TestBed.get(LoupeService);
    expect(service).toBeTruthy();
  });
});
