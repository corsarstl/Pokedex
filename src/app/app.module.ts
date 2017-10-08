import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MinPokemonComponent } from './min-pokemon.component';
import { DetailedPokemonComponent } from './detailed-pokemon/detailed-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MinPokemonComponent,
    DetailedPokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
