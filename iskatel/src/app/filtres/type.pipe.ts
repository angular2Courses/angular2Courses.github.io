import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  public transform(value: Service[], type: string): any {
    if(!type){
      return value;
    }

    return value.filter(service => `${service.type}`.indexOf(type) !== -1);
  }

}
