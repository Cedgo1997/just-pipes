import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})


export class CapitalizePipe implements PipeTransform {

  transform(value: string, all:boolean = true): string {
    value = value.toLowerCase();
    let nombres = value.split(' ');
    if(all) {
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      })
    }
    return nombres.join(' ');
  }

}
