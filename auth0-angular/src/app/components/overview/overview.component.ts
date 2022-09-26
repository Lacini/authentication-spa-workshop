import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  pokemonList$: Observable<any> = this.api.getPokemonList();

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToDetails(pokemon: any) {
    this.router.navigateByUrl('/detail/' + pokemon.name);
  }
}
