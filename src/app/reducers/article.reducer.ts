import { createReducer, on, State } from '@ngrx/store'
import { loadArticles, loadArticlesSuccess, loadArticlesFailure } from './article.action';

export interface ArticleState {
    articles: Array<any>;
}

export const initialState: ArticleState = {
    articles: []
}

export const articleReducer = createReducer(initialState,
    on(loadArticles, (state) => ({
        ...state
    })),

    on(loadArticlesSuccess, (state, action) => ({
        ...state,
        articles: action.data
    })),

    on(loadArticlesFailure, (state, action) => ({
        ...state,
        articles: []
    }))
);