import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-list',
  //se modifica el selector para hacerlo mas específico relativo al modulo
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power: 10
  }]
  //este sera el valor por defecto si no se envia nada

@Output()
public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string): void{
    if (!id) return;

    this.onDelete.emit(id);

  }


}
