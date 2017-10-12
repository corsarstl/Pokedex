import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PokedexService } from './shared/pokedex.service';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoritePokemonListComponent } from './favorite-pokemon-list/favorite-pokemon-list.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { CapitalizePipe } from './shared/capitalize.pipe';
import { ThreeDigitNumberPipe } from './shared/three-digit-number.pipe';

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
    PokemonListComponent,
    WelcomeComponent,
    PokemonInfoComponent,
    FavoriteComponent,
    FavoritePokemonListComponent,
    LoaderComponent,
    CapitalizePipe,
    ThreeDigitNumberPipe
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
