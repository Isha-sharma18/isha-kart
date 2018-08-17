import { TestBed, inject } from '@angular/core/testing';

import { FlipkartService } from './flipkart.service';

describe('FlipkartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlipkartService]
    });
  });

  it('should be created', inject([FlipkartService], (service: FlipkartService) => {
    expect(service).toBeTruthy();
  }));
});
