import { Component } from '@angular/core';

@Component({
  selector: 'pok-all-pokemons',
  template: `
      <pok-navbar></pok-navbar>
      <pok-pokemon-list></pok-pokemon-list>
  `,
  styles: []
})
export class AllPokemonsComponent {
}
