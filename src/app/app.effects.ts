import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadArticles, loadArticlesSuccess } from './reducers/article.action';
import { ArticleService } from 'src/app/services/article.service';
import { map, switchMap } from 'rxjs/operators';
import { loadUsers, loadUsersSuccess } from './reducers/User.action';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private articleService: ArticleService, private userService: UserService) { }

  loadArticles = createEffect(() => this.actions$.pipe(
    ofType(loadArticles),
    switchMap(action => this.articleService.getArticles()),
    map((articles) => loadArticlesSuccess({ data:articles }))
  ))

  loadUsers = createEffect(() => this.actions$.pipe(
    ofType(loadUsers),
    switchMap(action => this.userService.getUsers()),
    map((articles) => loadUsersSuccess({ data:articles }))
  ))
 
}
