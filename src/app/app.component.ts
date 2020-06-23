import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'César González';
  array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  pi: number = Math.PI;
  salary:number = 1234.5;
  percentage: number = 0.234;
  date:Date = new Date();

  promiseValue = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Data has arrived');
    }, 4500);
  });

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
