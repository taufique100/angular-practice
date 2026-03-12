import { TestBed } from '@angular/core/testing';

import { Operators } from './operators';

describe('Operators', () => {
  let service: Operators;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Operators);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
