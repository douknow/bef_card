/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetRecodeService } from './get-recode.service';

describe('GetRecodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRecodeService]
    });
  });

  it('should ...', inject([GetRecodeService], (service: GetRecodeService) => {
    expect(service).toBeTruthy();
  }));
});
