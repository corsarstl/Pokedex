import { Component, Input } from '@angular/core';

import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'pok-favorite',
  template: `
      <span class="glyphicon glyphicon-heart" aria-hidden="true"
            data-toggle="tooltip" [title]="isFavorite ? 'Remove from Favorites' : 'Add to Favorites'"
            [class.faveSelected]="isFaveSelected(isFavorite)"
            (click)="toggleFavorite(favoritePokemon)">
      </span>
  `,
  styles: [`.faveSelected { color: red; }
            .glyphicon { font-size: 2.7rem; padding-top: 10px; }
            .glyphicon-heart:hover { cursor: copy; }`]
})
export class FavoriteComponent {

  public isFavorite = false;
  // public alreadyFavorite = false;
  @Input() favoritePokemon: Pokemon[];

  constructor(private pokedexService: PokedexService) { }

  isFaveSelected(isFavorite: boolean): boolean {
    if (!isFavorite || !this.isFavorite) {
      return false;
    }
    return true;
  }

  toggleFavorite(favoritePokemon): void {
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
    this.isFavorite ? this.pokedexService.toFavorites(favoritePokemon) : this.pokedexService.removeFromFavorites(favoritePokemon);
  }

}
