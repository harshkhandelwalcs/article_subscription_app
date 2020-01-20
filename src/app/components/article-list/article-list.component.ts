import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { UserService } from 'src/app/services/user.service';

import { Store } from '@ngrx/store';
import { loadArticles } from 'src/app/reducers/article.action';
import { ArticleState } from 'src/app/reducers/article.reducer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleListComponent implements OnInit {
  articleList: any;
  selectedArticle: any;
  displayDialog: boolean;
  sortOptions: any;
  sortKey: string;
  sortField: string;
  sortOrder: number;
  articles: any;
  display: boolean = false;
  dialogTitle: any;
  userData: any;
  msgs: any;
  subscribedArticles: any = [];

  constructor(private userService: UserService,
    private store: Store<ArticleState>, private router: Router) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData.accountBalance);
    this.store.select<any>('articles').subscribe((data) => {
      this.articleList = data.articles;
      this.articles = [...this.articleList];
    })

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Title', value: 'title' }
    ];
  }

  goToArticleDetail(event: Event, article: any) {
    this.selectedArticle = article;
    console.log("selected article", this.selectedArticle);
    JSON.parse(localStorage.getItem('subscribedArticles')).push(this.selectedArticle.article_id);
    console.log(JSON.parse(localStorage.getItem('subscribedArticles')));
    const SA = JSON.parse(localStorage.getItem('subscribedArticles'));
    if (this.selectedArticle && this.selectedArticle.article_cost) {
      if (!SA.includes(this.selectedArticle.article_id)) {
        this.dialogTitle = this.selectedArticle.title
        this.display = true;
      } else {
        this.display = false;
        this.router.navigate([`/article/detail/${this.selectedArticle.article_id}`]);
      }
    }
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {

      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  dialogButton() {
    this.display = false;
    this.userData = JSON.parse(localStorage.getItem('userData'));
    if ((this.userData
      && this.userData.accountBalance
      && this.userData.accountBalance > this.selectedArticle.article_cost)) {
      this.userData.accountBalance = this.userData.accountBalance - this.selectedArticle.article_cost;
      localStorage.setItem('userData', JSON.stringify(this.userData));
      if (localStorage.getItem('subscribedArticles')) {
        const SA = JSON.parse(localStorage.getItem('subscribedArticles'));
        SA.push(this.selectedArticle.article_id);
        localStorage.setItem('subscribedArticles', JSON.stringify(SA));
      } else {
        localStorage.setItem('subscribedArticles', JSON.stringify([this.selectedArticle.article_id]));
      }
      this.userService.localData.next(this.userData);
      this.router.navigate([`/article/detail/${this.selectedArticle.article_id}`]);
    } else {
      this.showError();
    }
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: "You don't have enough balance in you wallet. Please top up." });
  }



}
