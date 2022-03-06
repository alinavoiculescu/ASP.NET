import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesComponent} from "./articles/articles.component";
import {PagesComponent} from "../pages/pages/pages.component";
import {AddressesComponent} from "../addresses/addresses/addresses.component";
import {PhotosComponent} from "../photos/photos/photos.component";
import {ArticlephotosComponent} from "../articlephotos/articlephotos/articlephotos.component";
import {ArticleComponent} from "./article/article.component";
import {ViewArticleComponent} from "./view-article/view-article.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
  },
  {
    path: 'pages',
    component: PagesComponent,
  },
  {
    path: 'articles',
    component: ArticlesComponent,
  },
  {
    path: 'articlephotos',
    component: ArticlephotosComponent,
  },
  {
    path: 'photos',
    component: PhotosComponent,
  },
  {
    path: 'addresses',
    component: AddressesComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: 'view-article/:id',
    component: ViewArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
