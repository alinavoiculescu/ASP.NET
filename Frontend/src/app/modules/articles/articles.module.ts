import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import {MaterialModule} from "../material/material.module";
import { ChildComponent } from './child/child.component';
import { ArticleComponent } from './article/article.component';
import { ViewArticleComponent } from './view-article/view-article.component';
import {MarksPipe} from "../../marks.pipe";


@NgModule({
  declarations: [
    ArticlesComponent,
    ChildComponent,
    ArticleComponent,
    ViewArticleComponent,
    MarksPipe,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MaterialModule
  ],
  exports: [
    MarksPipe,
  ]
})
export class ArticlesModule { }
