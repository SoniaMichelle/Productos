import { TestBed } from '@angular/core/testing';

import { AarticulosService } from './aarticulos.service';

describe('AarticulosService', () => {
  let service: AarticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AarticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
