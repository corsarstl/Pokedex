import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Pokemon } from '../pokemon';
import { PokemonDetails } from '../pokemon-details';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class PokedexService {

  @Input() baseImageUrl = 'https://pokeapi.co/media/img/';
  private baseUrl = 'https://pokeapi.co/api/v1/pokemon/';

  constructor(private http: Http) { }

  getAllPokemons() {
    return this.http.get(`${this.baseUrl}?limit=12`)
      .toPromise()
      .then((res: Response) => {
        let data = res.json();
        let allPokemonsUnsorted = [];
        let allPokemons = [];

        data.objects.forEach((object) => {
          let pokemon = new Pokemon();
          pokemon.id = object.national_id;
          pokemon.name = object.name;
          pokemon.types = [];
          pokemon.types.push(object.types[0].name);

          if (object.types[1] !== undefined) {
            pokemon.types.push(object.types[1].name);
          }

          allPokemonsUnsorted.push(pokemon);
          allPokemons = allPokemonsUnsorted.sort((a, b) => a.id - b.id);
        });

        return allPokemons;
      })
      .catch (this.handleError);
  }

  getOnePokemon(selectedPokemon) {
    return this.http.get(`${this.baseUrl}${selectedPokemon.id}`)
      .toPromise()
      .then((res: Response) => {
        let data = res.json();
        let pokemonDetails = new PokemonDetails();

        pokemonDetails.number = data.national_id;
        pokemonDetails.name = data.name;
        pokemonDetails.types = [];
        pokemonDetails.types.push(data.types[0].name);

        if (data.types[1] !== undefined) {
          pokemonDetails.types.push(data.types[1].name);
        }

        pokemonDetails.attack = data.attack;
        pokemonDetails.defense = data.defense;
        pokemonDetails.hp = data.hp;
        pokemonDetails.spAttack = data.sp_atk;
        pokemonDetails.spDefense = data.sp_def;
        pokemonDetails.speed = data.speed;
        pokemonDetails.weight = data.weight;
        pokemonDetails.totalMoves = data.moves.length;

        return pokemonDetails;
      })
      .catch (this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  toFavorites(favoritePokemon) {
    let savedFavoritesObj = JSON.parse(localStorage.getItem('favoritePokemons'));
    savedFavoritesObj ? this.addToFavorites(favoritePokemon, savedFavoritesObj) : this.saveToFavorites(favoritePokemon);
  }

  addToFavorites(favoritePokemon, savedFavoritesObj) {
    let key = favoritePokemon.name;
    savedFavoritesObj[`${key}`] = favoritePokemon;

    let savedFavoritesStr = JSON.stringify(savedFavoritesObj);
    localStorage.setItem('favoritePokemons', savedFavoritesStr);
    console.log(`Pokemon "${favoritePokemon.name}" was added to Favorites`);
  }

  saveToFavorites(favoritePokemon) {
    let savedFavorites = {};
    let key = favoritePokemon.name;
    savedFavorites[`${key}`] = favoritePokemon;

    let PokemonStr = JSON.stringify(savedFavorites);
    localStorage.setItem('favoritePokemons', PokemonStr);
    console.log(`Pokemon "${favoritePokemon.name}" was saved to Favorites`);
  }

  removeFromFavorites(favoritePokemon) {
    let savedFavoritesObj = JSON.parse(localStorage.getItem('favoritePokemons'));
    let key = favoritePokemon.name;

    delete savedFavoritesObj[`${key}`];

    let updatedSavedFavoritesStr = JSON.stringify(savedFavoritesObj);
    localStorage.setItem('favoritePokemons', updatedSavedFavoritesStr);
    console.log(`Pokemon "${favoritePokemon.name}" was removed from Favorites`);
    }

}
