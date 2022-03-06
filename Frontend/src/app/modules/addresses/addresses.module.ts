import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses/addresses.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    AddressesComponent
  ],
  imports: [
    CommonModule,
    AddressesRoutingModule,
    MaterialModule
  ]
})
export class AddressesModule { }
