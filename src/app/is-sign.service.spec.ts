/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IsSignService } from './is-sign.service';

describe('IsSignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsSignService]
    });
  });

  it('should ...', inject([IsSignService], (service: IsSignService) => {
    expect(service).toBeTruthy();
  }));
});
