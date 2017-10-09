import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PokedexService } from './shared/pokedex.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllPokemonsComponent } from './all-pokemons/all-pokemons.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonListComponent,
    WelcomeComponent,
    AllPokemonsComponent,
    PokemonInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
