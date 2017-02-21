import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GetCardsService {

  private url_all_cards = 'allusercard';

  constructor(
    private http: Http
  ) { }

  getAllCards(): Promise<Object[]> {
    return this.http.get(this.url_all_cards)
      .toPromise()
      .then(data => data.json().result.items)
      .catch(() => []);
  }

}
