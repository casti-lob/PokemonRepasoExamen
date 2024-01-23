import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [ FormsModule, RouterLink],
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent implements OnInit {
@Input() pokemonSearch: string=""
@Input() id:number=0
pokemon!:Pokemon
constructor(
  private pokemonsService:PokemonsService,
  private route:ActivatedRoute
  ){}

ngOnInit(): void {
  this.pokemonsService.getPokemon(this.id)
  .subscribe({
    next: (pokemon)=> this.pokemon = pokemon
  })

}


  
}
