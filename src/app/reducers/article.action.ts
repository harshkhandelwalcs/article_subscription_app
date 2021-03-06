import { createAction, props } from '@ngrx/store';

export const loadArticles = createAction(
    '[Article] Load Articles'
);

export const loadArticlesSuccess = createAction(
    '[Article] Load Articles Success',
    props<{ data: any }>()
);

export const loadArticlesFailure = createAction(
    '[Article] Load Articles Failure',
    props<{ error: any }>()
);