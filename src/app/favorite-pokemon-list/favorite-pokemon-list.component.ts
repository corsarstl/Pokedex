import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../shared/pokedex.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'pok-favorite-pokemon-list',
  templateUrl: './favorite-pokemon-list.component.html',
  styleUrls: ['../pokemon-list/pokemon-list.component.css']
})
export class FavoritePokemonListComponent implements OnInit {

  pokemons: Pokemon[];
  public selectedPokemon = Pokemon;
  public toDisplayDetails = false;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    // this.pokedexService.getFavoritePokemons()
    this.pokedexService.getAllPokemons()
      .then((pokemons) => {
        this.pokemons = pokemons;
        console.log(pokemons);
      });
  }

  onSelect(pokemon): void {
    this.selectedPokemon =  pokemon;
  }

  hidePrevPokemonInfo() {
    this.toDisplayDetails = false;
  }

  getPokemonDetailes() {
    this.toDisplayDetails = true;
  }

}
