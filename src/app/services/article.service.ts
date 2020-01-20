import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  getArticlesUrl = 'assets/dummy-data/articles.json';

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get(this.getArticlesUrl);
  }
}
