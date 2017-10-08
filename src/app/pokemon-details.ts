export class PokemonDetails {
  number: number;       // national_id
  name: string;         // name
  imageUrl: string;     // https://pokeapi.co/media/img/{{id}}.png
  types: string[];      // types
  attack: number;       // attack
  defense: number;      // defense
  hp: number;           // hp
  spAttack: number;     // sp_atk
  spDefense: number;    // sp_def
  speed: number;        // speed
  weight: number;       // weight
  totalMoves: number;   // moves
}
