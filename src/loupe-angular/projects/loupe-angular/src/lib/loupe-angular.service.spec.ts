import { TestBed } from '@angular/core/testing';

import { LoupeAngularService } from './loupe-angular.service';

describe('LoupeAngularService', () => {
  let service: LoupeAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoupeAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
