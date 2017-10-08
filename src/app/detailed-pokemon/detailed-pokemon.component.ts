import { Component } from '@angular/core';

@Component({
  selector: 'pok-detailed-pokemon',
  templateUrl: './app/detailed-pokemon/detailed-pokemon.component.html',
  styleUrls: ['./app/detailed-pokemon/detailed-pokemon.component.css']
})
export class DetailedPokemonComponent {
  number: number;
  name: string;
  imageUrl: string;
  types: string[];
  attack: number;
  defense: number;
  hp: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  weight: number;
  totalMoves: number;
}
