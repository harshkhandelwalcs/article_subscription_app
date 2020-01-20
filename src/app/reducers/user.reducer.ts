import { createReducer, on, State } from '@ngrx/store'
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './User.action';

export interface UserState {
    users: Array<any>;
}

export const initialState: UserState = {
    users: []
}

export const userReducer = createReducer(initialState,
    on(loadUsers, (state) => ({
        ...state
    })),

    on(loadUsersSuccess, (state, action) => ({
        ...state,
        users: action.data
    })),

    on(loadUsersFailure, (state, action) => ({
        ...state,
        users: []
    }))
);