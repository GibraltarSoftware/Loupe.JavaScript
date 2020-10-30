import { TestBed } from '@angular/core/testing';

import { RouteChangeListenerService } from './route-change-listener.service';

describe('RouteChangeListenerService', () => {
  let service: RouteChangeListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteChangeListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
