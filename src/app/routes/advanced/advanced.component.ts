import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css'],
  animations: [
    trigger('spoonAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }), // Start
        query(':enter', stagger('100ms', [
          animate('1s', style({ opacity: 1 })) // Animate
        ]), { optional: true })
      ])
    ])
  ],
})
export class AdvancedComponent implements OnInit {
  spoons: { id: number, name: string }[] = [];

  constructor() {
    console.log('AdvancedComponent constructor');
  }

  ngOnInit(): void {
  }


  showSpoons(): void {
    if (this.spoons.length > 0) {
      this.spoons = [];
    } else {
      this.spoons = [
        { id: 1, name: 'Absinthe' },
        { id: 2, name: 'Bouillon' },
        { id: 5, name: 'Caviar' },
        { id: 3, name: 'Coffee' },
        { id: 4, name: 'Dessert' },
        { id: 5, name: 'Egg' },
        { id: 6, name: 'Horn' },
        { id: 7, name: 'Iced Tea' },
        { id: 8, name: 'Marrow' },
        { id: 9, name: 'Melon' },
        { id: 10, name: 'Parfait' },
        { id: 11, name: 'Salt' },
        { id: 12, name: 'Saucier' },
        { id: 13, name: 'Soup' }
      ];
    }
  }
}
