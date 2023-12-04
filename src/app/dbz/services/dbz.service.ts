//a-service tab
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
// en la terminal para instalar uuid npm i uuid
import { v4 as uuid } from 'uuid';
// npm i --save-dev @types/uuid
@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[]=[
    // con ctrl + . se importa la libreria
    {
      id: uuid(),
      name:'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power:7500
    }
  ];

  addCharacter(character: Character): void {

    // console.log('Main Page');
    // console.log(character);
    const newCharacter: Character={id: uuid(), ...character};

    this.characters.push(newCharacter);
    //push lo agrega al final del arreglo
  }

  //onDeleteCharacter(index:number){
  //  this.characters.splice(index,1);
    //en el index se debe indicar la cantidad de elementos a borrar, por eso se pone 1
  //}

  deleteCharacterById(id:string){
    this.characters= this.characters.filter ( character => character.id !==id);
    //devuleve un arreglo sin el personaje borrado
  }


  constructor() { }

}
