/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddChangeControlService } from './add-change-control.service';

describe('AddChangeControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddChangeControlService]
    });
  });

  it('should ...', inject([AddChangeControlService], (service: AddChangeControlService) => {
    expect(service).toBeTruthy();
  }));
});
