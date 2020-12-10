import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ExploreLayoutComponent } from './containers/explore-layout.component';
import { ExploreService } from './explore.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapModule } from '../map/map.module';
import { SharedModule } from '../shared/shared.module';
import { ExploreAddComponent } from './containers/explore-add.component';
import { ExploreFormComponent } from './components/explore-form.component';

@NgModule({
  declarations: [
    ExploreLayoutComponent,
    ExploreAddComponent,
    ExploreFormComponent,
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
