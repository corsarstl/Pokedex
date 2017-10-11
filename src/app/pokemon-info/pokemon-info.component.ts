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
  baseImageUrl = 'https://pokeapi.co/media/img/8';

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getOnePokemon(this.pokemonToDisplay)
      .then((pokemon) => {
        this.pokemonToDisplay = pokemon;
        console.log(pokemon);
    });
  }

}
