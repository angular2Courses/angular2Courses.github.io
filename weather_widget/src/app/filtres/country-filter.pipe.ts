import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CountryFilterPipe'
})
export class CountryFilterPipe implements PipeTransform {

  public transform(value: Hotel[], country: string): any {
    if(!country){
      return value;
    }

    return value.filter(hotel => `${hotel.place}`.indexOf(country) !== -1);
  }

}