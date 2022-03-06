import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import {MaterialModule} from "../material/material.module";
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    PagesComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
