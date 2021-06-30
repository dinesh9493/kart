import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: "product-list", component: ProductListComponent },
  { path: "details/:index", component: ProductDetailsComponent },
  { path: "details/:index", component: ProductDetailsComponent },
  { path: "add", component: AddComponent },
  { path: "", redirectTo: "product-list", pathMatch: "full" },
  { path: "**", redirectTo: "product-list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
