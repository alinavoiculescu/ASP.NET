import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlephotosRoutingModule } from './articlephotos-routing.module';
import { ArticlephotosComponent } from './articlephotos/articlephotos.component';
import {MaterialModule} from "../material/material.module";
import {ChildComponent} from "./child/child.component";
import { ArticlephotoComponent } from './articlephoto/articlephoto.component';


@NgModule({
  declarations: [
    ArticlephotosComponent,
    ChildComponent,
    ArticlephotoComponent
  ],
  imports: [
    CommonModule,
    ArticlephotosRoutingModule,
    MaterialModule,
  ]
})
export class ArticlephotosModule { }
