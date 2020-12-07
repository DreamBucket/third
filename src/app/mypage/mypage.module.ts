import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypageDatagridComponent } from './components/mypage-datagrid.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapModule } from '../map/map.module';
import { MypageLayoutComponent } from './containers/mypage-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MypageDatagridComponent,
    MypageLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    MapModule,
  ],
})
export class MypageModule { }
