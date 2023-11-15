//a-compon + tab
import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: `./main-page.component.html`
})
// se usa el backstick = alt + 96

export class MainPageCommponent  {

  public characters: Character[]=[
    {
    name:'Krillin',
    power: 1000
    },
    {
    name:'Goku',
    power: 9500
    },
    {
      name: 'Vegeta',
      power:7500
    }
  ];

  onNewCharacter(character: Character): void {
    // console.log('Main Page');
    // console.log(character);

    this.characters.push(character);
  }
}
