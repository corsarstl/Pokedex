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

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.pokedexService.getOnePokemon(this.pokemonToDisplay);
    console.log(this.pokemonToDisplay);
  }

}
