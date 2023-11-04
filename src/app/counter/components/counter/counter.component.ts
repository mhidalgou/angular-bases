//import { Component } from "@angular/core";


//este modulo se debe agregar en el app.modules
// manualmente:
//@Component({
//  selector: 'app-counter',
  //nombre del componente
//  template: '<h1>Hola Counter</h1>',
//})

//export class CounterComponent{

//}

//usando sniper se digita a-compon y tab
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  //nombre del componente
  template: `

  <h3>Counter: {{counter}}</h3>
  <button (click)="incrementaPor(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="incrementaPor(-1)">-1</button>

  `
})

export class CounterComponent{

  public counter : number=10;

  resetCounter(){
    this.counter=10
  }

  incrementaPor(value:number):void{
    this.counter +=value
  }
}


