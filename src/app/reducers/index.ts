import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ArticleState, articleReducer } from './article.reducer';
import { UserState, userReducer } from './user.reducer';

export interface State {
  articles: ArticleState,
  users: UserState
}

export const reducers: ActionReducerMap<State> = {
  articles: articleReducer,
  users: userReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
