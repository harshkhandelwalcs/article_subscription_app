import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/authguard';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
    
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "article/list",
    component: ArticleListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "article/detail/:articleId",
    component: ArticleDetailComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
