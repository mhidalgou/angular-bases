import { Component, EventEmitter,Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();
    //el decorador hay que importardo desde @angular/core

  public character:Character={
    name: '',
    power:0
  };

  emitCharacter(): void {
    // para emitir el personaje en la lista de personaes
    // console.log(this.character);
    if (this.character.name.length===0) return;
      this.onNewCharacter.emit(this.character);
      this.character = {name:'', power:0}
      // this.character.name='';
      // this.character.power=0;
    }
}
