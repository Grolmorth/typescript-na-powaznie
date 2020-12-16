import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.component.html',
  styleUrls: ['./chapter3.component.scss']
})
export class Chapter3Component implements OnInit {
  #name;
  constructor() { this.#name = 'asd' }
  greet() {
    console.log(`${this.#name}`)
  }
  ngOnInit(): void {
    this.greet();

  }
  // roznica var , let i const
  liczonko() {
    for (let i = 0; i < 10; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 10);
    }
  }
  doSthg(shouldDoIt) {
    const x = 10;
    if (shouldDoIt) {
      // deklaracja const/jej brak zmienia return
      const x = 42;
    }
    return console.log(x);
  }
  func1() {
    const x = {
      a: 2
    };
    // x = { a: 3 } // const nie pozwala na taka zmiane
    x.a = 3; // const pozwala na mutacje
  }
  // destrukturyzacja i skrocony zapis
  getNewUser() {
    const name = this.generateNewUser();
    const age = this.generateNewAge();
    return { name, age };
  }
  generateNewAge() { return 20; }
  generateNewUser() { return 'imie'; }

  getTimePeriod() { return [1, 'day']; }
  executeTimePeriod() {
    const [period, unit] = this.getTimePeriod();
    console.log(period, unit);
  }
  arrExecute() {
    const arr = [
      { key: 'a', val: 2 },
      { key: 'b', val: 3 },
      { key: 'c', val: 4 },
    ];

    arr.forEach(function (obj) {
      console.log(obj.key, obj.val);
    });
    // ES2015+
    arr.forEach(({ key, val }) => console.log(key, val));
  }
  myFn({ param1, param2 }) {
    console.log(param1, param2);
  }
  myFnExecute() {
    this.myFn({ param1: 123, param2: 'abc' });
  }
  calculateArea(p1, p2): void {
    console.log(Math.abs((p2.x - p1.x) * (p2.y - p1.y)));
  }
  executeCalculateArea() {
    this.calculateArea({ x: 1, y: 1 }, { x: -1, y: -2 });
  }
  // domyslna wartosc parametrow

  doSomething(value = 42) {
    console.log(value);
  }
  doSomethingExecute() {
    this.doSomething(1);
  }
  paramsFunction(
    { a = 1 } = {}, { b } = { b: 2 }
  ) {
    console.log(a, b);
  }
  paramsFunctionExecute() {
    this.paramsFunction({}, { b: 1 });
  }
  // REST

  restFunction(obj, ...paths) {
    console.log(obj, paths);
  }
  restFunctionExecute() {
    this.restFunction({ c: 1 }, 'c', 'b');
  }
  // spread
  spreadFunction(x?: number, y?: number, z?: number) {
    console.log(x + y + z);
  }
  spreadFunctionExecute() {
    const args = [0, 1, 2];
    this.spreadFunction.apply(null, args);
  }
  // spread działa dobrze jak argumenty sa optymalne '?'
  spreadFunctionExecute2() {
    const args = [1, 1, 3];
    this.spreadFunction(...args);
  }
  copy(): void {
    const args = [1, 1, 3];
    const copy = [...args];
    console.log(copy);
  }
  copy2(): void {
    const args = [1, 1, 3];
    const copy = [...args];
    const copy2 = [...args, ...copy, ...args];
    console.log(copy2);
  }



}
// własności klas
// class Component {

//   state = { text: '' };
//   boundFunction = () => { }

// }
