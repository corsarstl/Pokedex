import { Component } from '@angular/core';

@Component({
  selector: 'pok-root',
  template: `
      <pok-all-pokemons></pok-all-pokemons>
      <pok-favorite-pokemons></pok-favorite-pokemons>
  `,
  styles: []
})
export class AppComponent {
}
