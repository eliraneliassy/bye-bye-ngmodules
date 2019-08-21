import { CounterModule } from './counter/counter.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { TimerExampleComponent } from './timer-example/timer-example.component';
import { TimerComponent } from './timer-example/timer/timer.component';
import { RenderCompComponent } from './render-comp/render-comp.component';
import { PushPipe } from './push.pipe';
import { MarkForCheckComponent } from './mark-for-check/mark-for-check.component';
import { ChildComponent } from './mark-for-check/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    TimerExampleComponent,
    TimerComponent,
    RenderCompComponent,
    PushPipe,
    MarkForCheckComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CounterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
