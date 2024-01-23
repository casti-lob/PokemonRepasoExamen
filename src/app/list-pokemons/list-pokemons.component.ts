import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { Pokemon } from '../interfaces/Pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-pokemons',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './list-pokemons.component.html'
})
export class ListPokemonsComponent implements OnInit{
 pokemons:Pokemon[]=[]; 
  constructor(private pokemonsService:PokemonsService){}
  
  ngOnInit(): void {
   this.pokemonsService.getPokemons()
   .subscribe({
    next: (pokemon) =>this.pokemons = pokemon
   
   })
  }


}
