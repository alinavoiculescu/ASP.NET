import { TestBed } from '@angular/core/testing';

import { ArticlephotosService } from './articlephotos.service';

describe('ArticlephotosService', () => {
  let service: ArticlephotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlephotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
