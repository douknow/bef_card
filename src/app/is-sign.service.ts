import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
import { Result } from './result.module';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IsSignService implements CanActivate {

  constructor(
    private router: Router,
    private http: Http
  ) { }

  private isSignUrl = 'issign';

  private user = {
    get: false,
    isSign: false,
    userInfo: { }
  };

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.isSign()
      .map(bo => {
        if (bo) {
          return true;
        } else {
          this.router.navigate(['login']);
        }
      });
  }

  isSign(): Observable<boolean> {
    return this.http.get(this.isSignUrl)
      .map(res => res.json() as Result)
      .map(result => result.success === 1);
  }

  setUser() {
    this.user.get = true;
    this.user.isSign = true;
  }

}
