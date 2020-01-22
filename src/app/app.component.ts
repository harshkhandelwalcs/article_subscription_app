import { Component } from '@angular/core';
import { ArticleState } from 'src/app/reducers/article.reducer';
import { Store } from '@ngrx/store';
import { loadArticles } from 'src/app/reducers/article.action';
import { loadUsers } from './reducers/User.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="articleSubscription"
  constructor(private store: Store<ArticleState>){
    this.store.dispatch(loadArticles());
    this.store.dispatch(loadUsers());
  }
}
