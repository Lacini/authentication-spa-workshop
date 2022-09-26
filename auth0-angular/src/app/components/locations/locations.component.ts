import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  @Input() pokemonId: string | undefined;

  location$: Observable<any> | undefined;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    if (this.pokemonId) {
      this.location$ = this.api.getPokemonLocation(this.pokemonId);
    }
  }

}
