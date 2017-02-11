/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthLoginService } from './auth-login.service';

describe('AuthLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLoginService]
    });
  });

  it('should ...', inject([AuthLoginService], (service: AuthLoginService) => {
    expect(service).toBeTruthy();
  }));
});
