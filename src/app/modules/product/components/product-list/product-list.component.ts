import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCT_LIST, PRODUCT_CARD_STYLE } from '../../../shared/constants/product-item.constants';

import { SharedService } from 'src/app/modules/shared/services/shared.service';
import { ApiService } from 'src/app/modules/shared/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList = PRODUCT_LIST;
  productCardStyle = PRODUCT_CARD_STYLE;

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    console.log(this.productList);
    this.getNewsList();
  }

  addToCart(product: any) {
    this.sharedService.updateCartList(product);
    this.sharedService.triggerNotification();
  }

  goToDetailsPage(ind: number) {
    this.router.navigate(["/product/details", ind]);
  }

  getNewsList() {
    this.apiService.getNewsPosts().subscribe(
      (res: any) => {
        console.log("Successfull API response",res);
      },
      (error: any) => {
        console.log(error);
      },
    );
    this.apiService.getNewsApi().subscribe(
      (res: any) => {
        console.log("Successfull API response",res);
      },
      (error: any) => {
        console.log(error);
      },
    );
  }

}
