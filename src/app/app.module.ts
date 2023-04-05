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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
