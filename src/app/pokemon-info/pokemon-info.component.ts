import { Component, Input, OnInit } from '@angular/core';

import { PokemonDetails } from '../pokemon-details';
import { PokedexService } from '../shared/pokedex.service';

@Component({
  selector: 'pok-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {

  @ Input() pokemonToDisplay: PokemonDetails;
  public loading = false;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.loading = true;
    this.pokedexService.getOnePokemon(this.pokemonToDisplay)
      .then((pokemon) => {
        this.pokemonToDisplay = pokemon;
        console.log(pokemon);
        this.loading = false;
    });
  }

}
