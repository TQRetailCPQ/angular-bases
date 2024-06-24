import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})

export class ListDbzComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: "",
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    console.log('Id: ', id);

    // Emitir el indice del character a borrar.
    this.onDelete.emit(id);
  }

}
