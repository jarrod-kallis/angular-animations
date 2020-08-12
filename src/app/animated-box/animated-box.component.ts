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
        transform: 'scale(2)'
      })),
      transition('* => basic', animate('800ms')),
      transition('* => original', animate('200ms'))
    ])
  ]
})
export class AnimatedBoxComponent implements OnInit {

  @Input() currentState: string;

  constructor() { }

  ngOnInit(): void {
  }

}
