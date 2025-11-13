import { TestBed } from '@angular/core/testing';

import { Comservice2Service } from './comservice2.service';

describe('Comservice2Service', () => {
  let service: Comservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
