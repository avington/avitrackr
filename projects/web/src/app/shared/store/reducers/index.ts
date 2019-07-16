import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import * as fromUserProfile from './user-profile.reducer';

export interface ApplicationState {
  userProfile: fromUserProfile.UserState;
}

export const reducers: ActionReducerMap<ApplicationState> = {
  userProfile: fromUserProfile.reducer
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [logger] : [];

export function logger(reducer: ActionReducer<ApplicationState>): ActionReducer<ApplicationState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}
