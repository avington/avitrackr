import { createAction, props } from '@ngrx/store';
import { Profile } from '../../models/profile.model';

export const getUserProfile = createAction('[USER] GET');
export const getUserProfileSuccess = createAction('[USER] GET Success', props<{ userProfile: Profile }>());
export const getUserProfileFailed = createAction('[USER] GET Fail', props<{ error }>());
