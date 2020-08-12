import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';

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
            from: 0,
            to: 1,
            time: '1s'
          }
        })
      ])
    ])
  ]
})
export class FadeBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
