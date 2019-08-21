import { MarkForCheckComponent } from './mark-for-check/mark-for-check.component';
import { RenderCompComponent } from './render-comp/render-comp.component';
import { TimerExampleComponent } from './timer-example/timer-example.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  { path: 'render-cmp', component: RenderCompComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'timer', component: TimerExampleComponent },
  { path: 'cd', component: MarkForCheckComponent },
  { path: 'dynamic-import', loadChildren: () => import('./feature/feature.module').then((m) => m.FeatureModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
