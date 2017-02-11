/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCardsService } from './get-cards.service';

describe('GetCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCardsService]
    });
  });

  it('should ...', inject([GetCardsService], (service: GetCardsService) => {
    expect(service).toBeTruthy();
  }));
});
