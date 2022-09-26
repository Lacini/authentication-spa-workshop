import { Component, OnInit } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user$ = of({
    name: 'John Doe',
    picture: 'https://i.kym-cdn.com/photos/images/original/001/147/668/5c8.png'
  });

  constructor(
  ) { }

  ngOnInit(): void {
  }

  logout() {
  }
}
