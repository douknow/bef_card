import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { ChildLoginComponent } from './child-login/child-login.component';
import { ChildRegisterComponent } from './child-register/child-register.component';
import { AuthLoginService } from '../auth-login.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthLoginService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ChildLoginComponent
      },
      {
        path: 'register',
        component: ChildRegisterComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRoutingModule { };