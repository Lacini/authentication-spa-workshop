import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemonList() {
    return this.http.get('http://localhost:3000/api/pokemon-list');
  }

  getPokemon(name: string | null) {
    if (name) {
      return this.http.get(`http://localhost:3000/api/pokemon/${name}`);
    } else {
      return of(null);
    }
  }

  getPokemonLocation(name: string | null) {
    if (name) {
      return this.http.get(`http://localhost:3000/api/pokemon-location/${name}`);
    } else {
      return of(null);
    }
  }
}
