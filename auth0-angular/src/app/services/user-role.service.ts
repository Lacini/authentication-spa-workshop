import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(
    private jwtHelper: JwtHelperService,
  ) {
  }

  userHasRole(role: string): Observable<boolean> {
    return of (false)
  }

}
