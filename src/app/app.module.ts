import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActorsComponent } from './components/actors/actors.component';
import { PlayerComponent } from './components/player/player.component';
import { DetailComponent } from './components/detail/detail.component';
import { FiltroPais } from './pipes/filtertPais.pipe';
import { FiltroGenero } from './pipes/filterGenero.pipe';
import { FilternombrePipe } from './pipes/filternombre.pipe';
import { enviroment } from 'src/enviroments/enviroments';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    PlayerComponent,
    DetailComponent,
    FiltroPais,
    FiltroGenero,
    FilternombrePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideFirestore(() => getFirestore())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
