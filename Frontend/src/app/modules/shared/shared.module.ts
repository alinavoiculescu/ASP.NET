import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditArticleComponent } from './add-edit-article/add-edit-article.component';
import { AddEditPageComponent } from './add-edit-page/add-edit-page.component';
import { AddEditPhotoComponent } from './add-edit-photo/add-edit-photo.component';
import { AddEditArticlephotoComponent } from './add-edit-articlephoto/add-edit-articlephoto.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HoverBtnDirective} from "../../hover-btn.directive";



@NgModule({
  declarations: [
    AddEditArticleComponent,
    AddEditPageComponent,
    AddEditPhotoComponent,
    AddEditArticlephotoComponent,
    HoverBtnDirective,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddEditArticleComponent,
    AddEditPageComponent,
    AddEditArticlephotoComponent,
    AddEditPhotoComponent,
  ],
  exports: [
    HoverBtnDirective,
  ]
})
export class SharedModule { }
