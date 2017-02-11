import { Component, OnInit } from '@angular/core';
import { IsSignService } from './is-sign.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Hello smile!';

  constructor(
    private signService: IsSignService
  ) { }

  ngOnInit() {
  }

}
