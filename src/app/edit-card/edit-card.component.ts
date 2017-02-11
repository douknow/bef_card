import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from '../card/card.module';
import { Observable } from 'rxjs/Rx';
import { Result } from '../result.module';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  @Input() buttonValue: string;
  @Input() cardInfo: Card;
  // 1： 增加
  // 2： 修改
  @Input() type: number;

  @Output() cancelClick = new EventEmitter();
  @Output() submitClick = new EventEmitter();

  private title: string = '';
  private content: string = '';

  private addUrl: string = 'addcard';
  private changeUrl: string = 'updatecard';

  private addcardMsg: string = '添加成功!';
  private changecardMsg: string = '修改成功!';
  private addcardErr: string = '添加失败，请稍后重试';
  private changecardErr: string = '修改失败，请稍后重试';

  constructor(
    private http: Http,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    if (this.cardInfo) {
      this.title = this.cardInfo.title;
      this.content = this.cardInfo.content;
    }
  }

  onSubmitClick(card): void {
    if (this.type === 1) {
      // 添加卡片
      let data = {
        cardtitle: this.title,
        cardcontent: this.content
      };
      this.http.post(this.addUrl, data)
        .map(res => res.json() as Result)
        .subscribe(result => {
          if (result.success === 1) {
            // 添加成功
            this.openSnackBar(this.addcardMsg);
            this.submitClick.emit(result.result.card);
            this.cancelClick.emit();
          } else {
            this.openSnackBar(this.addcardErr);
          }
        });
    }
    if (this.type === 2) {
      let data = {
        _id: this.cardInfo._id,
        title: this.title,
        content: this.content
      };
      this.http.post(this.changeUrl, data)
        .map(res => res.json() as Result)
        .subscribe(result => {
          if (result.success === 1) {
            // 修改成功
            this.cardInfo.title = result.result.card.title;
            this.cardInfo.content = result.result.card.content;
            this.openSnackBar(this.changecardMsg);
            this.cancelClick.emit();
          } else {
            // 修改失败
            this.openSnackBar(this.changecardErr);
          }
        });
    }
  }

  onCancelClick(): void {
    this.cancelClick.emit();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '关闭', {
      duration: 2000
    });
  }

}
