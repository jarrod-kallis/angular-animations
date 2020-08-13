import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, AnimationEvent } from '@angular/animations';

import { fadeAnimationHardCoded, fadeAnimationConfigurable } from '../animations';

@Component({
  selector: 'app-fade-block',
  templateUrl: './fade-block.component.html',
  styleUrls: ['./fade-block.component.css'],
  animations: [
    trigger('changeState', [
      // 'void' state means as soon as the component is first rendered to the screen
      transition('void => *', [
        // useAnimation(fadeAnimationHardCoded)
        useAnimation(fadeAnimationConfigurable, {
          params: {
            delay: '3000ms',
            from: 1,
            to: 0,
            time: '1s'
          }
        })
      ])
    ])
  ]
})
export class FadeBlockComponent implements OnInit {

  constructor() {
    console.log('FadeBlockComponent constructor');
  }

  ngOnInit(): void {
  }

  animationBegin(e: AnimationEvent): void {
    console.log(e.phaseName + ': ' + e.fromState + ' => ' + e.toState + ' [' + e.totalTime + ']');
  }

  animationEnd(e: AnimationEvent): void {
    console.log(e.phaseName + ': ' + e.fromState + ' => ' + e.toState + ' [' + e.totalTime + ']');
  }
}
