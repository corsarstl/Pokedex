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
  public selectedPokemon = Pokemon;
  // public isSelected = false;
  // selectedIndex: number;

  // errorMessage: string;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.pokedexService.getAllPokemons()
      .then((pokemons) => {
        this.pokemons = pokemons;
        console.log(pokemons);
      });
  }

  onSelect(pokemon): void {
    this.selectedPokemon =  pokemon;
  }

  // onSelect(pokemon) {
  //   this.selectedPokemon = pokemon;
  //   this.isSelected = true;
  // }
  // public pokemonSelect(index: number) {
  //   this.selectedIndex = index;  // don't forget to update the model here
  //   // ... do other stuff here ...
  // }

  // getPokemons() {
  //   this.pokedexService.getAllPokemons()
  //     .subscribe(
  //       pokemons => this.pokemons = pokemons,
  //       error => this.errorMessage = <any>error
  //     );
  // }

}
