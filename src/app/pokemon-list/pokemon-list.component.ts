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
  public toDisplayDetails = false;
  public loading = false;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.loading = true;
    this.pokedexService.getAllPokemons()
      .then((pokemons) => {
        this.pokemons = pokemons;
        console.log(pokemons);
        this.loading = false;
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
