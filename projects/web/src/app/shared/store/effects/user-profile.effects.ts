import { Injectable } from '@angular/core';
import { Actions, ofType, Effect, createEffect } from '@ngrx/effects';
import { ProfileDataService } from '../../services/profile-data.service';
import { UserProfileActions } from '../actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { Profile } from '../../models/profile.model';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserProfileEffects {
  userProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.getUserProfile),
      exhaustMap(() => {
        return this.userData.getUser().pipe(
          map((profiles: Profile[]) => UserProfileActions.getUserProfileSuccess({ userProfile: profiles[0] })),
          catchError(err => of(UserProfileActions.getUserProfileFailed({ error: err })))
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private userData: ProfileDataService
  ) {}
}
