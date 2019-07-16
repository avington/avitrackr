import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApplicationState } from '../reducers';
import * as fromUserProfileReducer from '../reducers/user-profile.reducer';
import get from 'lodash/get';
import { Profile } from 'selenium-webdriver/firefox';

export const getUserPofileState = createFeatureSelector<ApplicationState, fromUserProfileReducer.UserState>(
  'userProfile'
);

export const getUserFromState = createSelector(
  getUserPofileState,
  (state: fromUserProfileReducer.UserState) => state.entity
);

export const getUserLoadingFromState = createSelector(
  getUserPofileState,
  (state: fromUserProfileReducer.UserState) => state.loading
);

export const getUserLoadedFromState = createSelector(
  getUserPofileState,
  (state: fromUserProfileReducer.UserState) => state.loaded
);

export const getUserProjectsFromState = createSelector(
  getUserFromState,
  profile => {
    return get(profile, 'projects', []);
  }
);
