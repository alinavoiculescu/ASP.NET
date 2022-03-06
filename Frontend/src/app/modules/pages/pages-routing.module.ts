import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {ArticlesComponent} from "../articles/articles/articles.component";
import {AddressesComponent} from "../addresses/addresses/addresses.component";
import {PhotosComponent} from "../photos/photos/photos.component";
import {ArticlephotosComponent} from "../articlephotos/articlephotos/articlephotos.component";
import {PageComponent} from "./page/page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
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
    path: 'page/:id',
    component: PageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
