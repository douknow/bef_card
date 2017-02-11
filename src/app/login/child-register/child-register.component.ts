import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Result } from '../../result.module';
import { Observable } from 'rxjs/Rx';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { GetRecodeService } from '../../get-recode.service';

@Component({
  selector: 'app-child-register',
  templateUrl: './child-register.component.html',
  styleUrls: ['./child-register.component.css']
})
export class ChildRegisterComponent implements OnInit {

  usernumber: string = '';
  recode: string = '';
  password: string = '';
  repassword: string = '';

  usernumberErr: string = '您输入的手机号码不合法，请检查！';
  recodeErr: string = '您输入的验证码不合法，请检查！';
  passwordErr: string = '您输入的密码不合法，请检查！';
  repasswordErr: string = '两次输入的密码不一致，请检查！';

  private getCodeDis: boolean = false;
  private getCodeValue: string = '获取验证码';

  constructor(
    public snackBar: MdSnackBar,
    private loginService: LoginService,
    private router: Router,
    private getRecodeService: GetRecodeService
    ) { }

  ngOnInit() {
  }

  getRecode(): void {
    if (!this.matchUserNumber(this.usernumber)) {
      this.openSnackBar(this.usernumberErr);
      return
    }

    this.getRecodeService.getRecode(this.usernumber)
      .subscribe(result => {
        if (result.success === 1) {
          // 验证码发送成功
          let time = 60;
          this.getCodeDis = true;
          this.getCodeValue = `${time}秒后重新获取`;
          const timeid = setInterval(
            () => {
              time --;
              if (time === 0) {
                clearInterval(timeid);
                this.getCodeValue = '获取验证码';
                this.getCodeDis = false;
                return
              }
              this.getCodeValue = `${time}秒后重新获取`;
            }, 1000
          );
        } else {
          this.openSnackBar(result.flag);
        }
      });
  }

  onClick(): void {
    if (!this.matchUserNumber(this.usernumber)) {
      this.openSnackBar(this.usernumberErr);
      return
    }
    if (!this.matchReCode(this.recode)) {
      this.openSnackBar(this.recodeErr);
      return 
    }
    if (!this.matchPassword(this.password)) {
      this.openSnackBar(this.passwordErr);
      return 
    }
    if (!this.matchRePassword(this.repassword)) {
      this.openSnackBar(this.repasswordErr);
      return 
    }

    // 调用注册服务
    let data = {
      usernumber: this.usernumber,
      recode: this.recode,
      password: this.password,
      repassword: this.repassword
    };
    this.loginService.authRegister(data)
      .subscribe(data => {
        if (data.success === 1) {
          this.router.navigate(['index']);
        } else {
          this.openSnackBar(data.flag);
        }
      });
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '关闭', {
      duration: 2000
    });
  }

  matchUserNumber(usernumber: string): boolean {
    let match = /^1\d{10}$/;
    return match.test(usernumber);
  }

  matchReCode(recode: string): boolean {
    let match = /^\d{6}$/;
    return match.test(recode);
  }

  matchPassword(password: string): boolean {
    let len_password = password.length;
    return len_password > 0 && len_password <= 20;
  }

  matchRePassword(repassword: string): boolean {
    return repassword === this.password;
  }

}
