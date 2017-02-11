import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Card } from './card.module';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  @Output() editClick = new EventEmitter();
  @Output() deleteClick = new EventEmitter();

  private deleteUrl = 'deletecard';

  constructor(
    private http: Http,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
  }

  onEditClick(): void {
    this.editClick.emit(this.card);
  }

  onDeleteClick(): void {
    this.http.post(this.deleteUrl, this.card)
      .map(res => res.json())
      .subscribe(result => {
        if (result.success === 1) {
          // 删除成功
          this.openSnackBar('删除成功！');
          this.deleteClick.emit(result.result.card);
        } else {
          // 删除失败
          this.openSnackBar('删除失败！');
        }
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '关闭', {
      duration: 2000
    });
  }

}
