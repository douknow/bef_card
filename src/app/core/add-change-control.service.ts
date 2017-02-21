import { Injectable } from '@angular/core';

@Injectable()
export class AddChangeControlService {

  private addCardShow = {
    add_card_show: false
  };

  constructor() { }

  showAddCard() {
    this.addCardShow.add_card_show = true;
  }

  closeAddCard() {
    this.addCardShow.add_card_show = false;
  }

  getAddCardStatu() {
    return this.addCardShow;
  }

}
