import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header.component';
import { NavigationComponent } from './components/navigation.component';
import { SharedService } from './shared.service';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    NavigationComponent,
  ],
  providers: [SharedService],
})
export class SharedModule { }
