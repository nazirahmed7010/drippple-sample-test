import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter2'
})
export class CurrencyFormatter2Pipe implements PipeTransform {

  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }

    // Format the number as a currency string
    const currencyString = value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    // Apply the necessary styling
    if (value < 0) {
      return `<span>-${currencyString}</span>`;
    } else {
      // Separate the whole number and decimal parts
      const [whole, decimal] = currencyString.split('.');

      // Return the formatted string with different colors for whole and decimal parts
      return `<span>${whole}.</span><span class="ft-sub-gray">${decimal}</span>`;
    }
  }
}
