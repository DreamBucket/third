import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExploreModule } from './explore/explore.module';
import { MapModule } from './map/map.module';
import { SharedModule } from './shared/shared.module';
import { MypageModule } from './mypage/mypage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ExploreModule,
    MypageModule,
    MapModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
