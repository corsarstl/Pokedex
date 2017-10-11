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
  // public isFavorite = true;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    let pokemons = this.pokedexService.getFavoritePokemons();
    this.pokemons = pokemons;
    // isFavorite = true;
    return pokemons;
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
