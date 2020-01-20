import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleState } from 'src/app/reducers/article.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailComponent implements OnInit {
  articleId: any;
  articleList: any;
  article: any;
  articleData: any;
  constructor(private route: ActivatedRoute, private store: Store<ArticleState>) {

  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      console.log("route params", data)
      if (data && data.articleId) {
        this.articleId = data.articleId;
      }
    })
    this.store.select<any>('articles').subscribe((articleData) => {
      this.articleList = articleData.articles;
      this.getArticleData(this.articleId)
    })
  }

  getArticleData(articleId) {
    if (this.articleList.length) {
      this.article = this.articleList.filter((element) => {
        return element.article_id == articleId
      });
      if (this.article && this.article.length) {

        this.articleData = this.article[0];
      }
      console.log(this.article)
    }
  }

}
