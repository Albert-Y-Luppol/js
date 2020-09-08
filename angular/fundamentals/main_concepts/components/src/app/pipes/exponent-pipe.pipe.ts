import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentPipe',
  pure: true,
})
export class ExponentPipe implements PipeTransform {
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }
}
