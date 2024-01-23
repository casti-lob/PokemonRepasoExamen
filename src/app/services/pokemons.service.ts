import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private url:string = 'http://localhost:3000/pokemons'
  constructor(private http: HttpClient) { }

  getPokemons():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.url);
  }
  getPokemon(id:number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.url}/${id}`);
  }
}
