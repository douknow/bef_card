import { Component, OnInit } from '@angular/core';
import { IsSignService } from './is-sign.service';
import { AddChangeControlService } from './core/add-change-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private user = {
    username: ''
  };

  private sign = {
    isSign: false
  };

  constructor(
    private signService: IsSignService,
    private controlEditCardService: AddChangeControlService
  ) { }

  ngOnInit() {
    this.getUser();
    this.getSign();
  }

  getSign() {
    this.sign = this.signService.getIsSign();
  }

  getUser() {
    this.user = this.signService.getUser();
  }

  addCardButtonClick() {
    this.controlEditCardService.showAddCard();
  }

}
