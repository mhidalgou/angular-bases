//a-module crea el modula

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';



@NgModule({
  exports: [
    HeroComponent,
    ListComponent,
  ],
  declarations: [
    HeroComponent,
    ListComponent,
    //se importan los componentes del heroe
    //el nombre se encuentra en el export class component del modulo ts de cada componente del heroe
  ],
  imports:[
    CommonModule
  ]
})
export class HeroesModule { }
