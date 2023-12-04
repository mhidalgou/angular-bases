//a-compon + tab
import { Component } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { TitleStrategy } from '@angular/router';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: `./main-page.component.html`
})
// se usa el backstick = alt + 96

export class MainPageCommponent  {

  constructor(private dbzService: DbzService){}
    //para inyectar el servicio
    get characters(): Character[]{
      return this.dbzService.characters;
    }

    onDeleteCharacter (id: string): void {
      this.dbzService.deleteCharacterById(id)
    }

    onNewCharacter( character:Character){
      this.dbzService.addCharacter(character);
    }
  }



