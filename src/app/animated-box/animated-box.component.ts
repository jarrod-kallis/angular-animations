import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animated-box',
  templateUrl: './animated-box.component.html',
  styleUrls: ['./animated-box.component.css'],
  animations: [
    trigger('changeState', [
      state('original', style({
        backgroundColor: '#47748f',
        transform: 'scale(1)'
      })),
      state('basic', style({
        backgroundColor: '#440000',
        transform: 'scale(1.7)'
      })),
      state('delaying', style({
        backgroundColor: '#812170',
        transform: 'scale(1.6)'
      })),
      state('easing', style({
        backgroundColor: '#985b00',
        transform: 'scale(1.8)'
      })),
      state('stepped', style({
        backgroundColor: 'black', // end state (after the animation has completed)
        transform: 'scale(1)'
      })),
      transition('* => basic', animate('800ms')),
      transition('* => original', animate('200ms')),
      transition('* => delaying', animate('800ms 1200ms ease-out')), // transition time, delay time, transition type
      transition('* => easing', animate('800ms ease-in-out')),
      transition('* => stepped', [
        animate('10000ms ease-in-out', keyframes([
          style({ backgroundColor: 'purple', transform: 'scale(1)', offset: 0 }), // start at purple
          style({ backgroundColor: 'blue', transform: 'scale(1.4)', offset: 0.1 }), // first 1s of 10s
          style({ backgroundColor: 'yellow', transform: 'scale(0.8)', offset: 0.2 }), // then next 1s of 10s
          style({ backgroundColor: 'green', transform: 'scale(1.2)', offset: 0.3 }), // then next 1s of 10s
          style({ backgroundColor: 'red', transform: 'scale(1)', offset: 0.4 }), // then next 1s of 10s
          style({ backgroundColor: 'orange', transform: 'scale(1)', offset: 1 }) // then next 6s of 10s
        ]))
      ]),
    ])
  ]
})
export class AnimatedBoxComponent implements OnInit {

  @Input() currentState: string;

  constructor() { }

  ngOnInit(): void {
  }

}
