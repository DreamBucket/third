import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreLayoutComponent } from './explore/containers/explore-layout.component';
import { MypageLayoutComponent } from './mypage/containers/mypage-layout.component';

const routes: Routes = [
  {
    path: 'explore',
    component: ExploreLayoutComponent,
  },
  {
    path: 'mypage',
    component: MypageLayoutComponent,
  },
  // {
  //   path: 'logs',
  //   component: LogListComponent,
  // },
  // {
  //   path: 'rules/:id/edit',
  //   component: RuleEditComponent,
  // },
  // {
  //   path: 'rules/:id/view',
  //   component: RuleViewComponent,
  // },
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  { path: '**', redirectTo: 'explore' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
