import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './components/cart-detail/cart-detail.component';

const routes: Routes = [
  { path: "details", component: CartDetailComponent },
  { path: "", redirectTo: "details", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
