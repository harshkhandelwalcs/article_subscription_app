import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
describe('ArticleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule, HttpClientTestingModule],
    providers:[ArticleService]
  }));

  it('should be created', () => {
    const service: ArticleService = TestBed.get(ArticleService);
    expect(service).toBeTruthy();
  });
});
