import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 导入路由模块
import { LoginRoutingModule } from './login-routing.module';

// 导入当前模块组件和服务
import { LoginComponent } from './login.component';
import { ChildLoginComponent } from './child-login/child-login.component';
import { ChildRegisterComponent } from './child-register/child-register.component';
import { LoginService } from './login.service';
import { AuthLoginService } from '../auth-login.service';
import { GetRecodeService } from '../get-recode.service';

// 导入样式文件
import { MaterialModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    LoginComponent,
    ChildLoginComponent,
    ChildRegisterComponent
  ],
  imports: [
    LoginRoutingModule,
    FormsModule,
    MaterialModule.forRoot()
  ],
  providers: [
    LoginService,
    AuthLoginService,
    GetRecodeService
  ]
})

export class LoginModule { }