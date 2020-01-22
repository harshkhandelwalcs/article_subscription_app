import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleDetailComponent } from './article-detail.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../reducers';
describe('ArticleDetailComponent', () => {
  let component: ArticleDetailComponent;
  let fixture: ComponentFixture<ArticleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule,
        HttpClientTestingModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        })],
      declarations: [ArticleDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get article list data', () => {
    component.articleList = [
      {
        "article_id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "article_type": "Premium",
        "article_cost": 10,
        "year": 1995,
        "article_detail": "Did you know the word ‘essay’ is derived from a Latin word ‘exagium’, which roughly translates to presenting one’s case? So essays are a short piece of writing representing one’s side of the argument or one’s experiences, stories, etc. Essays are very personalized. So let us learn about types of essays, format, and tips for essay-writing.An essay is generally a short piece of writing outlining the writer’s perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal. Formal essays are generally academic in nature and tackle serious topics. We will be focusing on informal essays which are more personal and often have humorous elements.This is when the writer is narrating an incident or story through the essay. So these are in the first person. The aim when writing narrative essays is to involve the reader in them as if they were right there when it was happening. So make them as vivid and real as possible. One way to make this possible is to follow the principle of ‘show, don’t tell’. So you must involve the reader in the story.Here the writer will describe a place, an object, an event or maybe even a memory. But it is not just plainly describing things. The writer must paint a picture through his words. One clever way to do that is to evoke the senses of the reader. Do not only rely on sight but also involve the other senses of smell, touch, sound etc. A descriptive essay when done well will make the reader feel the emotions the writer was feeling at the moment.In such an essay a writer presents a balanced study of a topic. To write such an essay, the writer must have real and extensive knowledge about the subject. There is no scope for the writer’s feelings or emotions in an expository essay. It is completely based on facts, statistics, examples etc. There are sub-types here like contrast essays, cause and effect essays etc.Here the purpose of the essay is to get the reader to your side of the argument. A persuasive essay is not just a presentation of facts but an attempt to convince the reader of the writer’s point of view. Both sides of the argument have to presented in these essays. But the ultimate aim is to persuade the readers that the writer’s argument carries more weight."
      },
      {
        "article_id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "article_type": "Normal",
        "article_cost": null,
        "year": 1995,
        "article_detail": "Did you know the word ‘essay’ is derived from a Latin word ‘exagium’, which roughly translates to presenting one’s case? So essays are a short piece of writing representing one’s side of the argument or one’s experiences, stories, etc. Essays are very personalized. So let us learn about types of essays, format, and tips for essay-writing.An essay is generally a short piece of writing outlining the writer’s perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal. Formal essays are generally academic in nature and tackle serious topics. We will be focusing on informal essays which are more personal and often have humorous elements.This is when the writer is narrating an incident or story through the essay. So these are in the first person. The aim when writing narrative essays is to involve the reader in them as if they were right there when it was happening. So make them as vivid and real as possible. One way to make this possible is to follow the principle of ‘show, don’t tell’. So you must involve the reader in the story.Here the writer will describe a place, an object, an event or maybe even a memory. But it is not just plainly describing things. The writer must paint a picture through his words. One clever way to do that is to evoke the senses of the reader. Do not only rely on sight but also involve the other senses of smell, touch, sound etc. A descriptive essay when done well will make the reader feel the emotions the writer was feeling at the moment.In such an essay a writer presents a balanced study of a topic. To write such an essay, the writer must have real and extensive knowledge about the subject. There is no scope for the writer’s feelings or emotions in an expository essay. It is completely based on facts, statistics, examples etc. There are sub-types here like contrast essays, cause and effect essays etc.Here the purpose of the essay is to get the reader to your side of the argument. A persuasive essay is not just a presentation of facts but an attempt to convince the reader of the writer’s point of view. Both sides of the argument have to presented in these essays. But the ultimate aim is to persuade the readers that the writer’s argument carries more weight."
      }];
      component.article = [
        {
          "article_id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          "article_type": "Premium",
          "article_cost": 10,
          "year": 1995,
          "article_detail": "Did you know the word ‘essay’ is derived from a Latin word ‘exagium’, which roughly translates to presenting one’s case? So essays are a short piece of writing representing one’s side of the argument or one’s experiences, stories, etc. Essays are very personalized. So let us learn about types of essays, format, and tips for essay-writing.An essay is generally a short piece of writing outlining the writer’s perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal. Formal essays are generally academic in nature and tackle serious topics. We will be focusing on informal essays which are more personal and often have humorous elements.This is when the writer is narrating an incident or story through the essay. So these are in the first person. The aim when writing narrative essays is to involve the reader in them as if they were right there when it was happening. So make them as vivid and real as possible. One way to make this possible is to follow the principle of ‘show, don’t tell’. So you must involve the reader in the story.Here the writer will describe a place, an object, an event or maybe even a memory. But it is not just plainly describing things. The writer must paint a picture through his words. One clever way to do that is to evoke the senses of the reader. Do not only rely on sight but also involve the other senses of smell, touch, sound etc. A descriptive essay when done well will make the reader feel the emotions the writer was feeling at the moment.In such an essay a writer presents a balanced study of a topic. To write such an essay, the writer must have real and extensive knowledge about the subject. There is no scope for the writer’s feelings or emotions in an expository essay. It is completely based on facts, statistics, examples etc. There are sub-types here like contrast essays, cause and effect essays etc.Here the purpose of the essay is to get the reader to your side of the argument. A persuasive essay is not just a presentation of facts but an attempt to convince the reader of the writer’s point of view. Both sides of the argument have to presented in these essays. But the ultimate aim is to persuade the readers that the writer’s argument carries more weight."
        }];
    component.getArticleData(1);
    expect(component.articleData).toEqual(component.articleList[0])

  })
});
