import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { PokedexService } from './shared/pokedex.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { AllPokemonsComponent } from './all-pokemons/all-pokemons.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { FavoriteComponent } from './favorite/favorite.component';
// import { FavoritePokemonsComponent } from './favorite-pokemons/favorite-pokemons.component';
import { FavoritePokemonListComponent } from './favorite-pokemon-list/favorite-pokemon-list.component';

const appRoutes: Routes = [
  {
    path: 'pokemons',
    component: PokemonListComponent,
    data: {title: 'Pokedex'}
    },
  {
    path: 'favorites',
    component: FavoritePokemonListComponent,
    data: {title: 'Favorites'}
    },
  { path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    // NavbarComponent,
    PokemonListComponent,
    WelcomeComponent,
    // AllPokemonsComponent,
    PokemonInfoComponent,
    FavoriteComponent,
    // FavoritePokemonsComponent,
    FavoritePokemonListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PokedexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
