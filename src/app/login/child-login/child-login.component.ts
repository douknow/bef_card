import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-child-login',
  templateUrl: './child-login.component.html',
  styleUrls: ['./child-login.component.css']
})
export class ChildLoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  private empty_username = '请输入用户名！';
  private empty_password = '请输入密码！';

  constructor(
    public snackBar: MdSnackBar,
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onClick() {
    if (this.username.length === 0) {
      this.openSnackBar(this.empty_username);
      return
    }
    if (this.password.length === 0) {
      this.openSnackBar(this.empty_password);
      return
    }

    // 调用用户验证服务
    this.loginService.authUser(this.username, this.password)
      .subscribe(result => {
        if (result.success === 1) {
          this.router.navigate(['index']);
        } else {
          this.openSnackBar(result.flag);
        }
      });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '关闭', {
      duration: 2000
    });
  }

}
