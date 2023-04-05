import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ACTORES } from 'src/app/models/info-actor';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})


export class ActorsComponent  {
  actores: Actor[] = ACTORES;
  @Input() nombre: string ="";
  @Input() masculino: boolean =false;
  @Input() femenino: boolean =false;
  @Input( ) pais: string ="";
  @Output() actorClicado: EventEmitter<number> = new EventEmitter();
  
  enviarActorClicado(valor: number): void {
    this.actorClicado.emit(valor);
  }




}
