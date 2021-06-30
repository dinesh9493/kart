import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent implements OnInit {

  cartList: any = [];

  constructor(
    private sharedService: SharedService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.cartList = this.sharedService.getCartList();
  }

  goToCheckout() {
    this.router.navigateByUrl("/checkout");
  }

}
