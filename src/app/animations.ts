import { animate, animation, style } from '@angular/animations';

export const fadeAnimationHardCoded = animation([
  style({
    opacity: '0'
  }), // Take 800ms, delay for 300ms
  animate('800ms 300ms ease-in-out', style({
    opacity: '1'
  }))
]);

export const fadeAnimationConfigurable = animation([
  style({
    opacity: '{{ from }}'
  }),
  animate('{{ time }} {{ delay }} ease-in-out', style({
    opacity: '{{ to }}'
  }))
]);
