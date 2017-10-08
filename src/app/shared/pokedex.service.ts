import { Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from '../pokemon';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class PokedexService {

  @Input() baseImageUrl: string = 'https://pokeapi.co/media/img/';
  // pokemons = {};
  private baseUrl: string = 'https://pokeapi.co/api/v1/pokemon/?limit=12';



  constructor(private http: Http) { }

  // getAllPokemons (): Promise<any> {
  //   return this.http.get(`${this.baseUrl}`)
  //     .toPromise()
  //     .then(response => response.json().results)
  // }

  // getAllPokemons(): Observable<Pokemon[]>  {
  //   return this.http.get(`${this.baseUrl}`)
  //     .map((response: Response) => <Pokemon[]> response.json())
  //     .do(data => )
  //     .catch(this.handleError);
  // }

  getAllPokemons() {
    return this.http.get(`${this.baseUrl}`)
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

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
