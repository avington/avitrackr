import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthCheckGuard implements CanLoad {

  constructor(private authFb: AngularFireAuth) { }
  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {
    // return this.authFb.authState.pipe(map(user => !!user));
    return true;
  }
}
