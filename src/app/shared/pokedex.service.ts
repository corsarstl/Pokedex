import { Injectable } from '@angular/core';
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

  private baseUrl = 'https://pokeapi.co/api/v1/pokemon/';

  constructor(private http: Http) { }


  getAllPokemons() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.get(`${this.baseUrl}?limit=12`, headers)
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


  getOnePokemon(pokemonToDisplay) {
    return this.http.get(`${this.baseUrl}${pokemonToDisplay.id}`)
    .toPromise()
      .then((res: Response) => {
        let data = res.json();
        let pokemonDetails = new PokemonDetails();

        pokemonDetails.id = data.national_id;
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


  getFavoritePokemons() {
    let pokemons = JSON.parse(localStorage.getItem('favoritePokemons'));
    return pokemons;
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
    savedFavoritesObj.push(favoritePokemon);

    let savedFavoritesStr = JSON.stringify(savedFavoritesObj);
    localStorage.setItem('favoritePokemons', savedFavoritesStr);
    console.log(`Pokemon "${favoritePokemon.name}" was added to Favorites`);
  }


  saveToFavorites(favoritePokemon) {
    let savedFavorites = [];
    savedFavorites.push(favoritePokemon);

    let PokemonStr = JSON.stringify(savedFavorites);
    localStorage.setItem('favoritePokemons', PokemonStr);
    console.log(`Pokemon "${favoritePokemon.name}" was saved to Favorites`);
  }


  removeFromFavorites(favoritePokemon) {
    let savedFavoritesObj = JSON.parse(localStorage.getItem('favoritePokemons'));

    let updatedSavedFavorites = savedFavoritesObj.filter(function (item) {
      if (item.id !== favoritePokemon.id) {
        return item;
      }
    });

    if (updatedSavedFavorites.length < 1) {
      localStorage.clear();
      console.log(`Pokemon "${favoritePokemon.name}" was removed from Favorites`);
      console.log('Local storage is empty!');
      return;
    }

    let updatedSavedFavoritesStr = JSON.stringify(updatedSavedFavorites);
    localStorage.setItem('favoritePokemons', updatedSavedFavoritesStr);
    console.log(`Pokemon "${favoritePokemon.name}" was removed from Favorites`);
    }

}
