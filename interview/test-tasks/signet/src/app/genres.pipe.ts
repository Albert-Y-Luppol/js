import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genres'
})
export class GenresPipe implements PipeTransform {

  transform(value:string): string {
    return value.split('|').join(', ');
  }

}
