import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "product", loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)  },
  { path: "cart", loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)  },
  { path: "checkout", loadChildren: () => import('./modules/checkout/checkout.module').then(m => m.CheckoutModule)  },
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "**", redirectTo: "product", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
