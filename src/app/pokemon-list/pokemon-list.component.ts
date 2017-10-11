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
  public isSelected = false;
  public toDisplayDetails = false;

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

  getPokemonDetailes() {
    this.toDisplayDetails = true;
  }

}
