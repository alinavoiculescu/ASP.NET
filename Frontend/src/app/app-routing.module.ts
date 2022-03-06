import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import("src/app/modules/articles/articles.module").then(m => m.ArticlesModule),
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import("src/app/modules/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: 'register',
    loadChildren: () => import("src/app/modules/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: 'pages',
    loadChildren: () => import("src/app/modules/pages/pages.module").then(m => m.PagesModule),
  },
  {
    path: 'articlephotos',
    loadChildren: () => import("src/app/modules/articlephotos/articlephotos.module").then(m => m.ArticlephotosModule),
  },
  {
    path: 'photos',
    loadChildren: () => import("src/app/modules/photos/photos.module").then(m => m.PhotosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
