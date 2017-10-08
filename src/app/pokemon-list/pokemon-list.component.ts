import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'pok-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  errorMessage: string;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokedexService.getAllPokemons()
      .subscribe(
        pokemons => this.pokemons = pokemons,
        error => this.errorMessage = <any>error
      );
  }

}
