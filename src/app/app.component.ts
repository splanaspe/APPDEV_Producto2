import { Component, Inject} from '@angular/core';
import { ACTORES } from './models/info-actor';
import { Actor } from './models/actor';
import { FiltroGenero } from './pipes/filterGenero.pipe';
import { FiltroPais } from './pipes/filtertPais.pipe';
import { NgModule } from '@angular/core';
import {Firestore, collection, collectionData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  firestore: Firestore = Inject(Firestore);
  actores$: Observable<any[]>;

  constructor(){
    const aCollection = collection(this.firestore, 'actors');
    this.actores$ = collectionData(aCollection);
  }

  title = 'producto1';

  actorClicado = -1;
  nombre: string = "";
  // actores: Actor[] = ACTORES;

  pais: string = ""; 

  
  
  masculino: boolean = false;
  femenino: boolean = false;


  recibirActorClicado(evento: number){
    this.actorClicado=evento;
  }

}


