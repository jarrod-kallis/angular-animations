import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, Data } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AdvancedComponent } from './routes/advanced/advanced.component';
import { BasicComponent } from './routes/basic/basic.component';
import { ContainedComponent } from './routes/contained/contained.component';
import { AnimatedBoxComponent } from './animated-box/animated-box.component';
import { MouseComponent } from './mouse/mouse.component';
import { FadeBlockComponent } from './fade-block/fade-block.component';

export interface RouteAnimation {
  value: string;
}

const animationRoutes: Routes = [
  {
    path: 'animation-home',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home',
      }
    }
  },
  {
    path: 'animation-basics',
    component: BasicComponent,
    data: {
      animation: {
        value: 'basics',
      }
    }
  },
  {
    path: 'animation-contained',
    component: ContainedComponent,
    data: {
      animation: {
        value: 'contained',
      }
    }
  },
  {
    path: 'animation-advanced',
    component: AdvancedComponent,
    // This data object literal has to be removed if you want the
    // animation on the block inside the AdvancedComponent to work.
    // No idea what's going on here
    // Also, visting the route for a second time doesn't run the animation again,
    // well it does, but so quickly that you see nothing (Check out the console.logs that get printed)
    // data: {
    //   animation: {
    //     value: 'advanced',
    //   }
    // }
  },
  {
    path: '',
    redirectTo: '/animation-home',
    pathMatch: 'full',
    data: {
      animation: {
        value: 'home',
      }
    }
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
