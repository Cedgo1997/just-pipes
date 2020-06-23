import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'César González';
  name2: string = 'cÉsAr GoNzáLez';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pi: number = Math.PI;
  salary:number = 1234.5;
  percentage: number = 0.234;
  date:Date = new Date();
  activate: boolean = true;


  language:string = 'en';
  videoUrl:string = 'https://www.youtube.com/embed/u3Q3Fe4D7eo';

  promiseValue = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Data has arrived');
    }, 4500);
  });


  changeLang(term:string) {
    this.language = term;
  }

  hero = {
    name: 'Logan',
    alias: 'Wolverine',
    age: 500,
    address: {
      street: 'First',
      house: 20,
    },
  };
}
