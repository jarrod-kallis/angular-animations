import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

import { slideAnimation } from './animations';
import { RouteAnimation } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None, // Not sure why?
  animations: [
    trigger('routerAnimations', [
      // * => *: Don't care what route we're transitioning from and to
      transition('* => *', slideAnimation)
    ])
  ]
})
export class AppComponent {
  prepareRouteTransition(outlet: RouterOutlet): string {
    const animation: RouteAnimation = outlet.activatedRouteData?.animation || {};
    console.log(animation?.value);
    return animation?.value || null;
  }
}
