import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  public transform(value: Service[], city: string): any {
    if(!city){
      return value;
    }

    return value.filter(service => `${service.city}`.indexOf(city) !== -1);
  }

}
