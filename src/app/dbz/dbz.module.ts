import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageCommponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [MainPageCommponent, ListComponent,AddCharacterComponent],
  //se debe declarar el componente
  //si se usa el creador de modulos se supone que él lo agrega aqui
  exports:[MainPageCommponent],
  //se debe exportar para se que sea visible a los demás modulos
  //el único componemte que se exporta es el maiPage que contiene el ListComponent
  imports: [CommonModule,
    FormsModule]
})
export class DbzModule { }
