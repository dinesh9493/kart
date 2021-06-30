import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';


@NgModule({
  declarations: [
    CartDetailComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
