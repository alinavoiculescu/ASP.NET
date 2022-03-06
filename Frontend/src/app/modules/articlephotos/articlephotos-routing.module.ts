import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlephotosComponent} from "./articlephotos/articlephotos.component";
import {ArticlesComponent} from "../articles/articles/articles.component";
import {PagesComponent} from "../pages/pages/pages.component";
import {AddressesComponent} from "../addresses/addresses/addresses.component";
import {PhotosComponent} from "../photos/photos/photos.component";
import {ArticlephotoComponent} from "./articlephoto/articlephoto.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'articlephotos',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlephotosRoutingModule { }
