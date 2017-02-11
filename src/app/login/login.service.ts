import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Result } from '../result.module';

@Injectable()
export class LoginService {

  private result = {
    isRight: false,
    errData: ''
  };

  constructor(
    private http: Http,
    private router: Router
  ) { }

  private loginUrl: string = 'login';
  private registerUrl: string = 'register';

  authUser(username: string, password: string): Observable<Result> {
    let data = {
      username: username,
      password: password
    };
    return this.http.post(this.loginUrl, data)
      .map(res => res.json() as Result);
  }

  authRegister(data: Object): Observable<Result> {
    // 执行注册发送逻辑
    return this.http.post(this.registerUrl, data)
      .map(res => res.json() as Result);
  }
  
}
