import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotosComponent} from "./photos/photos.component";
import {ArticlesComponent} from "../articles/articles/articles.component";
import {PagesComponent} from "../pages/pages/pages.component";
import {AddressesComponent} from "../addresses/addresses/addresses.component";
import {ArticlephotosComponent} from "../articlephotos/articlephotos/articlephotos.component";
import {PhotoComponent} from "./photo/photo.component";

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
    path: 'photo/:id',
    component: PhotoComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
