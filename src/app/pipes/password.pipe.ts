import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: any, active: boolean): string {

    let password:string;

    let passArr:any[] = [];

    if(active == true) {
      value = value.split('');
      for(let letter of value) {
        passArr.push('*');
        password = passArr.join('');
      }
      return password;
    } else {
      return value;
    }
  }

}
