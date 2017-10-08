import { Component } from '@angular/core';

@Component({
  selector: 'pok-min-pokemon',
  templateUrl: './min-pokemon/min-pokemon.component.html',
  styleUrls: ['./min-pokemon/min-pokemon.component.css']
})
export class MinPokemonComponent {
  number: number;
  name: string;
  types: string[];
  imageUrl: string;
}
