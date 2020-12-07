import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ExploreLayoutComponent } from './containers/explore-layout.component';
import { ExploreService } from './explore.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapModule } from '../map/map.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ExploreLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
    MapModule,
  ],
  providers: [ExploreService],
})
export class ExploreModule { }
