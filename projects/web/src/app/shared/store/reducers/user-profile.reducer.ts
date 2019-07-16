import { Profile } from '../../models/profile.model';
import { createReducer, on, Action } from '@ngrx/store';
import { UserProfileActions } from '../actions';

export interface UserState {
  entity: Profile;
  loading: boolean;
  loaded: boolean;
  error: any;
}

const initialState: UserState = {
  entity: null,
  loaded: false,
  loading: false,
  error: null
};

const userReducer = createReducer(
  initialState,
  on(UserProfileActions.getUserProfile, (state: UserState) => {
    return {
      ...state,
      loading: true
    };
  }),
  on(UserProfileActions.getUserProfileSuccess, (state: UserState, { userProfile }) => {
    return {
      ...state,
      entity: userProfile,
      loading: false,
      loaded: true,
      error: null
    };
  })
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
