import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

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
      transition('* => basic', animate('800ms')),
      transition('* => original', animate('200ms')),
      transition('* => delaying', animate('800ms 1200ms ease-out')), // transition time, delay time, transition type
      transition('* => easing', animate('800ms ease-in-out')),
    ])
  ]
})
export class AnimatedBoxComponent implements OnInit {

  @Input() currentState: string;

  constructor() { }

  ngOnInit(): void {
  }

}
