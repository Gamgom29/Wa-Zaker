import { Pipe, PipeTransform } from '@angular/core';
import { Surah } from './shared/interfaces/surah';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(surahs:Surah[] , term:string): Surah[] {
    return surahs.filter(item=> item.name.includes(term));
  }

}
