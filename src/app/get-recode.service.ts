import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Result } from './result.module';

@Injectable()
export class GetRecodeService {

  constructor(
    private http: Http
  ) { }

  private getRecodeUrl: string = 'getrecode';

  getRecode(usernumber: string): Observable<Result> {
    let data = {
      usernumber: usernumber
    };
    return this.http.post(this.getRecodeUrl, data)
      .map(res => res.json());
  }

}
