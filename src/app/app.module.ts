import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { CardComponent } from './card/card.component';

import { GetCardsService } from './core/get-cards.service';
import { IsSignService } from './is-sign.service';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CardComponent,
    EditCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    LoginModule
  ],
  providers: [
    GetCardsService,
    IsSignService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
