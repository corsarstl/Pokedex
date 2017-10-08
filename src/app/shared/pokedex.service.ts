import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokedexService {

  private baseUrl: string = 'https://pokeapi.co/api/v1/pokemon/?limit=12';

  constructor(private http: Http) { }

  getAllPokemons () {
    return this.http.get(`${this.baseUrl}`)
      .toPromise()
      .then(response => response.json().results)
  }

}
