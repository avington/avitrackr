import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { RouterActions } from '../actions';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  $routerGoEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(RouterActions.go),
        tap((payload: any) => {
          this.router.navigate(payload.path, { queryParams: payload.query, ...payload.extras });
        })
      ),
    { dispatch: false }
  );
}
