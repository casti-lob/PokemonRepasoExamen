import { Routes } from '@angular/router';
import { ListPokemonsComponent } from './list-pokemons/list-pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';

export const routes: Routes = [
    {path:'listPokemons', component:ListPokemonsComponent},
    {path:'pokemon/:id', component: PokemonComponent}
];
