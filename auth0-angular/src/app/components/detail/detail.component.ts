import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  pokemon$: Observable<any> | undefined;
  permissions$: Observable<any> | undefined;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      const name = paramMap.get('name');
      this.pokemon$ = this.api.getPokemon(name);
    })

    this.permissions$ = of([]);
  }

  goBackToList() {
    this.router.navigateByUrl('/overview');
  }
}
