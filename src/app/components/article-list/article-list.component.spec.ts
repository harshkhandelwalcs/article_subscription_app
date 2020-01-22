import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleListComponent } from './article-list.component';
import { DataViewModule } from 'primeng/dataview';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;
  let router: RouterTestingModule;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataViewModule,
        HttpClientModule,
        HttpClientTestingModule,
        MessageModule,
        MessagesModule,
        DropdownModule,
        PanelModule,
        DialogModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        }),
        RouterTestingModule
      ],
      declarations: [ArticleListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    router = RouterTestingModule;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show error', () => {
    component.msgs = [];
    component.msgs.push({ severity: 'error', summary: 'Error Message', detail: "You don't have enough balance in you wallet. Please top up." });
    component.showError();
    expect(component.msgs).toEqual([{ severity: 'error', summary: 'Error Message', detail: "You don't have enough balance in you wallet. Please top up." }]);
  })

  it('dialog button', () => {
    component.display = false;
    expect(component.display).toEqual(false);
    component.userData = {
      "user_id": 1,
      "password": "Test@123",
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      },
      "accountBalance": 100
    }

    component.selectedArticle = {
      "article_id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "article_type": "Premium",
      "article_cost": 10,
      "year": 1995,
      "article_detail": "Did you know the word ‘essay’ is derived from a Latin word ‘exagium’, which roughly translates to presenting one’s case? So essays are a short piece of writing representing one’s side of the argument or one’s experiences, stories, etc. Essays are very personalized. So let us learn about types of essays, format, and tips for essay-writing.An essay is generally a short piece of writing outlining the writer’s perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal. Formal essays are generally academic in nature and tackle serious topics. We will be focusing on informal essays which are more personal and often have humorous elements.This is when the writer is narrating an incident or story through the essay. So these are in the first person. The aim when writing narrative essays is to involve the reader in them as if they were right there when it was happening. So make them as vivid and real as possible. One way to make this possible is to follow the principle of ‘show, don’t tell’. So you must involve the reader in the story.Here the writer will describe a place, an object, an event or maybe even a memory. But it is not just plainly describing things. The writer must paint a picture through his words. One clever way to do that is to evoke the senses of the reader. Do not only rely on sight but also involve the other senses of smell, touch, sound etc. A descriptive essay when done well will make the reader feel the emotions the writer was feeling at the moment.In such an essay a writer presents a balanced study of a topic. To write such an essay, the writer must have real and extensive knowledge about the subject. There is no scope for the writer’s feelings or emotions in an expository essay. It is completely based on facts, statistics, examples etc. There are sub-types here like contrast essays, cause and effect essays etc.Here the purpose of the essay is to get the reader to your side of the argument. A persuasive essay is not just a presentation of facts but an attempt to convince the reader of the writer’s point of view. Both sides of the argument have to presented in these essays. But the ultimate aim is to persuade the readers that the writer’s argument carries more weight."
    }
    console.log("ab", component.userData, "cd", component.userData.accountBalance);
    component.userData.accountBalance = component.userData.accountBalance - component.selectedArticle.article_cost;
    component.dialogButton();
  })

  it('go to article detail', () => {
    let article = {
      "article_id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "article_type": "Premium",
      "article_cost": 10,
      "year": 1995,
      "article_detail": "Did you know the word ‘essay’ is derived from a Latin word ‘exagium’, which roughly translates to presenting one’s case? So essays are a short piece of writing representing one’s side of the argument or one’s experiences, stories, etc. Essays are very personalized. So let us learn about types of essays, format, and tips for essay-writing.An essay is generally a short piece of writing outlining the writer’s perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal. Formal essays are generally academic in nature and tackle serious topics. We will be focusing on informal essays which are more personal and often have humorous elements.This is when the writer is narrating an incident or story through the essay. So these are in the first person. The aim when writing narrative essays is to involve the reader in them as if they were right there when it was happening. So make them as vivid and real as possible. One way to make this possible is to follow the principle of ‘show, don’t tell’. So you must involve the reader in the story.Here the writer will describe a place, an object, an event or maybe even a memory. But it is not just plainly describing things. The writer must paint a picture through his words. One clever way to do that is to evoke the senses of the reader. Do not only rely on sight but also involve the other senses of smell, touch, sound etc. A descriptive essay when done well will make the reader feel the emotions the writer was feeling at the moment.In such an essay a writer presents a balanced study of a topic. To write such an essay, the writer must have real and extensive knowledge about the subject. There is no scope for the writer’s feelings or emotions in an expository essay. It is completely based on facts, statistics, examples etc. There are sub-types here like contrast essays, cause and effect essays etc.Here the purpose of the essay is to get the reader to your side of the argument. A persuasive essay is not just a presentation of facts but an attempt to convince the reader of the writer’s point of view. Both sides of the argument have to presented in these essays. But the ultimate aim is to persuade the readers that the writer’s argument carries more weight."
    }
    const SA = [1, 2];
    localStorage.setItem('subscribedArticles',JSON.stringify(SA));
    component.selectedArticle = article;
    component.goToArticleDetail(event, article);
    expect(SA[0]).toEqual(article.article_id)
  })

  it('go to article detail else', () => {
    let article = {
      "article_id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "article_type": "Premium",
      "article_cost": 10,
      "year": 1995,
      "article_detail": "Did you know the word ‘essay’ is derived from a Latin word ‘exagium’, which roughly translates to presenting one’s case? So essays are a short piece of writing representing one’s side of the argument or one’s experiences, stories, etc. Essays are very personalized. So let us learn about types of essays, format, and tips for essay-writing.An essay is generally a short piece of writing outlining the writer’s perspective or story. It is often considered synonymous with a story or a paper or an article. Essays can be formal as well as informal. Formal essays are generally academic in nature and tackle serious topics. We will be focusing on informal essays which are more personal and often have humorous elements.This is when the writer is narrating an incident or story through the essay. So these are in the first person. The aim when writing narrative essays is to involve the reader in them as if they were right there when it was happening. So make them as vivid and real as possible. One way to make this possible is to follow the principle of ‘show, don’t tell’. So you must involve the reader in the story.Here the writer will describe a place, an object, an event or maybe even a memory. But it is not just plainly describing things. The writer must paint a picture through his words. One clever way to do that is to evoke the senses of the reader. Do not only rely on sight but also involve the other senses of smell, touch, sound etc. A descriptive essay when done well will make the reader feel the emotions the writer was feeling at the moment.In such an essay a writer presents a balanced study of a topic. To write such an essay, the writer must have real and extensive knowledge about the subject. There is no scope for the writer’s feelings or emotions in an expository essay. It is completely based on facts, statistics, examples etc. There are sub-types here like contrast essays, cause and effect essays etc.Here the purpose of the essay is to get the reader to your side of the argument. A persuasive essay is not just a presentation of facts but an attempt to convince the reader of the writer’s point of view. Both sides of the argument have to presented in these essays. But the ultimate aim is to persuade the readers that the writer’s argument carries more weight."
    }
    const SA = [1, 2];
    localStorage.setItem('subscribedArticles',JSON.stringify(SA));

    component.selectedArticle = null;
    if (component.selectedArticle && component.selectedArticle.article_cost) {
      if (!SA.includes(this.selectedArticle.article_id)) {
        component.dialogTitle = component.selectedArticle.title
        component.display = true;
      } else {
        component.display = false;
        // this.router.navigate([`/article/detail/${this.selectedArticle.article_id}`]);
      }
    } else {
      component.display = false;
      // this.router.navigate([`/article/detail/${this.selectedArticle.article_id}`]);
    }
    component.goToArticleDetail(event, article);
    expect(SA[0]).toEqual(article.article_id)
  })

  it('on sort change', () => {
    let event = {
      value: 'year'
    }
    let value = event.value;
    if (value.indexOf('!') === 0) {

      component.sortOrder = -1;
      component.sortField = value.substring(1, value.length);
    }
    else {
      component.sortOrder = 1;
      component.sortField = value;
    }
    component.onSortChange(event);
  })

  it('on sort change not', () => {
    let event = {
      value: '!year'
    }
    let value = event.value;
    if (value.indexOf('!') === 0) {

      component.sortOrder = -1;
      component.sortField = value.substring(1, value.length);
    }
    else {
      component.sortOrder = 1;
      component.sortField = value;
    }
    component.onSortChange(event);
  })
});
