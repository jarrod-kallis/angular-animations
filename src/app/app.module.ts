import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AdvancedComponent } from './routes/advanced/advanced.component';
import { BasicComponent } from './routes/basic/basic.component';
import { ContainedComponent } from './routes/contained/contained.component';
import { AnimatedBoxComponent } from './animated-box/animated-box.component';
import { MouseComponent } from './mouse/mouse.component';
import { FadeBlockComponent } from './fade-block/fade-block.component';

const animationRoutes: Routes = [
  {
    path: 'animation-home',
    component: HomeComponent
  },
  {
    path: 'animation-basics',
    component: BasicComponent
  },
  {
    path: 'animation-contained',
    component: ContainedComponent
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvancedComponent,
    BasicComponent,
    ContainedComponent,
    AnimatedBoxComponent,
    MouseComponent,
    FadeBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
