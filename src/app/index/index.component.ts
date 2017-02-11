import { Component, OnInit } from '@angular/core';

import { GetCardsService } from '../core/get-cards.service';

import { Card } from '../card/card.module';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private changeCard: boolean = false;

  private cards = [];
  private editCard: Card;
  private addCard: boolean = false;

  constructor(
    private getCardsService: GetCardsService
  ) { }

  ngOnInit() {
    this.getCardsService.getAllCards().then(item => {
      this.cards = item;
    });
  }

  onEditClick(card: Card): void {
    this.editCard = card;
    this.changeCard = true;
  }

  onDeleteClick(card: Card) {
    let index = this.cards.findIndex(c => c._id === card._id);
    this.cards.splice(index, 1);
  }

}
