import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosComponent } from './photos/photos.component';
import {MaterialModule} from "../material/material.module";
import { PhotoComponent } from './photo/photo.component';


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    MaterialModule
  ]
})
export class PhotosModule { }
