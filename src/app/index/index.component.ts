import { Component, OnInit } from '@angular/core';
import { GetCardsService } from '../core/get-cards.service';
import { Card } from '../card/card.module';
import { AddChangeControlService } from '../core/add-change-control.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private controlEdit = {};

  private changeCard: boolean = false;
  private addCard: boolean = false;

  private cards = [];
  private editCard: Card;

  constructor(
    private getCardsService: GetCardsService,
    private getAddCardStatuService: AddChangeControlService
  ) { }

  ngOnInit() {
    this.initAddChange();
    this.getCardsService.getAllCards().then(item => {
      this.cards = item;
    });
  }

  addCancelButtonClick() {
    this.getAddCardStatuService.closeAddCard();
  }

  initAddChange() {
    this.controlEdit = this.getAddCardStatuService.getAddCardStatu();
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
