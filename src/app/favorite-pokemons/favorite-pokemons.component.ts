import { Component } from '@angular/core';

@Component({
  selector: 'pok-favorite-pokemons',
  template: `
      <pok-navbar></pok-navbar>
      <pok-favorite-pokemon-list></pok-favorite-pokemon-list>
  `,
  styles: []
})
export class FavoritePokemonsComponent {
}
