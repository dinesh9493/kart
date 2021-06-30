import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PRODUCT_LIST } from 'src/app/modules/shared/constants/product-item.constants';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productDetails: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    let index: any = this.activatedRoute.snapshot.paramMap.get("index");
    if(index != undefined && index != null) {
      this.productDetails = PRODUCT_LIST[Number(index)];
    }
  }

  buyNow() {
    console.log(this.productDetails);
  }

}
