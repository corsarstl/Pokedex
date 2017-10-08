import { Injectable } from '@angular/core';
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

  pokemons = {};
  private baseUrl: string = 'https://pokeapi.co/api/v1/pokemon/?limit=12';
  private baseImageUrl: string = 'https://pokeapi.co/media/img/';


  constructor(private http: Http) { }

  // getAllPokemons (): Promise<any> {
  //   return this.http.get(`${this.baseUrl}`)
  //     .toPromise()
  //     .then(response => response.json().results)
  // }

  getAllPokemons(): Observable<Pokemon[]>  {
    return this.http.get(`${this.baseUrl}`)
      .map((response: Response) => <Pokemon[]> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let message = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(message);
  }

  // getBooks(): Observable<IBook[]> {
  //   return this._http
  //     .get('api/books/books.json')

  //     .map((response: Response) => <IBook[]> response.json())
  //     // .do(data => console.log(data))
  //     .catch(this.handleError)
  // }
  //

}
