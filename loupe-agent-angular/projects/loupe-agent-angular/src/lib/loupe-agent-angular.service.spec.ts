import { TestBed } from '@angular/core/testing';

import { LoupeAgentAngularService } from './loupe-agent-angular.service';

describe('LoupeAgentAngularService', () => {
  let service: LoupeAgentAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoupeAgentAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
