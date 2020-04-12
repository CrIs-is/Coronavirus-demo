import { trigger, style, transition, animate, state, keyframes} from '@angular/animations';

// tslint:disable-next-line: align

export const anima =  [
    trigger('lado',[
    state('open', style({
      transform: 'translateX(-100%)',
      opacity: 0.01
    })),
    state('closed', style({
      transform: 'translateX(0%)',
      opacity: 1,
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
  ]),
    trigger('openClose', [
      // ...
      state('open', style({
        transform: 'translateX(100%)',
        opacity: 0.01,
       // tslint:disable-next-line: no-trailing-whitespace
       
      })),
      state('closed', style({
        transform: 'translateX(0%)',
        opacity: 1,
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('1s')
      ]),
    ]),
  ]