import { afterRender, Directive, ElementRef, input } from '@angular/core';

@Directive({
  selector: '[appHighlightNumericValue]',
})
export class HighlightNumericValueDirective {
  appHighlightNumericValue = input.required<number>();

  positiveColor = input('var(--featured-recipe)');
  negativeColor = input('var(--highlight-expense)');

  constructor(element: ElementRef<HTMLElement>) {
    afterRender(() => {
      if (this.appHighlightNumericValue() > 0) {
        element.nativeElement.style.color = this.positiveColor();
      } else if (this.appHighlightNumericValue() < 0) {
        element.nativeElement.style.color = this.negativeColor();
      }
    });
  }
}
