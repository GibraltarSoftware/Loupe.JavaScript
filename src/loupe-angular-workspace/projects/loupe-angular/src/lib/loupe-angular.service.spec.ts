import { TestBed } from '@angular/core/testing';

import { LoupeAngularService } from './loupe-angular.service';

describe('LoupeAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoupeAngularService = TestBed.get(LoupeAngularService);
    expect(service).toBeTruthy();
  });
});
