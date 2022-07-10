import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppInputFormat]'
})
export class AppInputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('blur') onBlur() {
    let value = this.el.nativeElement.value;
    console.log(value)
  }

}