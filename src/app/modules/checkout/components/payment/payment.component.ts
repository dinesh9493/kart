import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  cartList: any = [];
  totalAmount: number = 0;

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartList = this.sharedService.getCartList();
    this.getTotalAmount();
  }

  getTotalAmount() {
    if(this.cartList.length) {
      this.totalAmount = this.cartList.reduce((total: number, item: any) => {
        return total + Number(item.price);
      }, 0);
    }
  }

  pay() {
    console.log("Pay");
  }
}
