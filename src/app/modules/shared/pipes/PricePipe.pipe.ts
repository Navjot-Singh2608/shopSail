import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): string {
    if (value !== null && value !== undefined) {
      return `$${value.toFixed(2)}`;
    }
    return '';
  }
}
