import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendu]'
})
export class RenduDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color = 'blue';
    el.nativeElement.style.backgroundColor = 'green';
  }

}
