import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { IsSignService } from './is-sign.service';

@Injectable()
export class AuthLoginService implements CanActivate {

  constructor(
    private isSignService: IsSignService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return this.isSignService.isSign()
      .map(bo => {
        if (bo) {
          this.router.navigate(['index']);
        } else {
          return true;
        }
      });
  }

}
